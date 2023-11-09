import {
    Stage,
    Layer,
    Node,
    TextNode,
    TipNode,
    CircleNode,
    Link,
    AutoFoldLink,
    CurveLink,
    ArcLink,
    BezierLink,
    randomColor,
    Shape,
    PopupMenu
} from '@jtopo/core';
import { provider } from './Provider'
import { simulator } from './Simulator';

class Manager {
    stage;
    layer;

    init(divObj) {
        const stage = new Stage(divObj);
        const layer = new Layer('default');

        stage.addChild(layer);
        stage.show();

        this.stage = stage;
        this.layer = layer;


        this.loadConfig();
        this.initEvent();
        this.test();
    }

    loadConfig() {
        const stage = this.stage;
        const layer = this.layer;
        layer.css({
            background: 'white'
        });
        var cnt = 0;
        let toRemoveSearchBox = stage.toolbar.domObj.childNodes;
        toRemoveSearchBox.forEach(group => {
            if (cnt == 5) {
                group.remove();
            }
            cnt = cnt + 1;
        });
        let buttons = stage.toolbar.buttons;
        let toRemoveButtons = [];
        cnt = 0;
        toRemoveButtons.forEach(button => {
            if (cnt == 10 || cnt == 11 || cnt == 12) {
                button.remove();
            }
            cnt = cnt + 1;
        });
        var click_load_file = false;
        buttons.forEach(button => {
            toRemoveButtons.push(button);
            if (button.title == "打开本地文件") {
                button.addEventListener('mouseup', () => {
                    click_load_file = true;
                });
                button.addEventListener('mouseout', () => {
                    if (click_load_file == true) {
                        layer.css({
                            background: 'white'
                        });
                        layer.getChildren().forEach(child => {
                            if (child.className == 'Node') {
                                child.on('mousedragend', () => {
                                    provider.updateNode(child);
                                });
                            }
                        });
                        click_load_file = false;
                    }
                });
            }
        });
    }

    initEvent() {
        const stage = this.stage;
        const layer = this.layer;

        const as = stage.animationSystem;
        const is = stage.inputSystem;
        const pm1 = new PopupMenu(stage);
        const pm2 = new PopupMenu(stage);
        const pm3 = new PopupMenu(stage);

        var tempNode;
        var choose_connect;
        var choose_send;

        pm1.setHtml(`
            <a>创建终端</a>
            <a>创建连接点</a>
        `);
        pm2.setHtml(`
        <a>连接</a>
        <a>发送</a>
        `);
        pm3.setHtml(`
        <a>连接</a>
        `);
        pm1.on('select', function(event) {
            let item = event.item;
            let x = layer.mouseX;
            let y = layer.mouseY;
            let node;
            if (item == '创建终端') {
                node = provider.newNode('终端', x, y);
                layer.addChild(node);
            } else if (item == '创建连接点') {
                node = provider.newNode('连接点', x, y);
                layer.addChild(node);
            }
        });
        pm2.on('select', function(event) {
            let item = event.item;
            let target = is.pickedObject;
            let x = layer.mouseX;
            let y = layer.mouseY;
            if (item == '连接') {
                tempNode = target;
                choose_connect = true;
            } else if (item == '发送') {
                tempNode = target;
                choose_send = true;
            }
        });
        pm3.on('select', function(event) {
            let item = event.item;
            let target = is.pickedObject;
            let x = layer.mouseX;
            let y = layer.mouseY;
            if (item == '连接') {
                tempNode = target;
                choose_connect = true;
            }
        });
        is.on('mouseup', () => {
            let button = is.button;
            let target = is.pickedObject;
            let x = is.x;
            let y = is.y;
            if (button == 0) {
                if (choose_connect == true) {
                    if (target != null && target.className == 'Node') {
                        let link = provider.newLink(tempNode, target);
                        if (link != null) {
                            layer.addChild(link);
                        }
                    }
                    choose_connect = false;
                }
                if (choose_send == true) {
                    if (target != null && target.userData.customClassName == 'HostNode') {
                        simulator.broadcast(tempNode, target, as);
                    }
                    choose_send = false;
                }
                console.log("target", target);
            } else if (button == 2) {
                if (target == null) {
                    pm1.showAt(x, y);
                } else if (target.userData.customClassName == 'HostNode') {
                    pm2.showAt(x, y);
                } else if (target.userData.customClassName == 'JuncionNode') {
                    pm3.showAt(x, y);
                }
            }
        });
        is.on('mousedown', () => {
            pm1.hide();
            pm2.hide();
        });
    }

    test() {
        const stage = this.stage;
        const layer = this.layer;
        let is = stage.inputSystem;
        is.on('mouseup', () => {});
    }
}

export const topoManager = new Manager();