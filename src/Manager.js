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
import { provider } from './Provider';
import { Simulator } from './Simulator';

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
    }

    loadConfig() {
        const stage = this.stage;
        const layer = this.layer;
        layer.css({
            background: 'white',
        });

        var cnt;
        let toRemoveSearchBox = stage.toolbar.domObj.childNodes;
        let toRemoveGroup = [];
        toRemoveSearchBox.forEach(group => {
            toRemoveGroup.push(group);
        });
        cnt = 0;
        toRemoveGroup.forEach(group => {
            if (cnt == 3 || cnt == 5) {
                group.remove();
            }
            cnt = cnt + 1;
        });

        stage.toolbar.fileInput.addEventListener('change', () => {
            let sleep = time => {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            sleep(100).then(() => {
                layer.css({
                    background: 'white',
                });
                layer.getChildren().forEach(child => {
                    if (child.className == 'Node') {
                        child.on('mousedragend', () => {
                            provider.updateNode(child);
                        });
                    }
                });
            })
        });

        let img = document.createElement('img');
        img.src = 'imges\\查看.svg';
        img.style.width = '24px';
        img.style.height = 'auto';
        let bt = document.createElement('button');
        bt.title = '显示日志';
        bt.appendChild(img);
        stage.toolbar.domObj.appendChild(bt);

    }

    initEvent() {
        const stage = this.stage;
        const layer = this.layer;

        const is = stage.inputSystem;
        const pm1 = new PopupMenu(stage);
        const pm2 = new PopupMenu(stage);
        const pm3 = new PopupMenu(stage);
        const simulator = new Simulator(stage);

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
                    if (target != null && target != tempNode && target.className == 'Node') {
                        let link = provider.newLink(tempNode, target);
                        if (link != null) {
                            layer.addChild(link);
                        }
                    }
                    choose_connect = false;
                }
                if (choose_send == true) {
                    if (target != null && target != tempNode && target.userData.customClassName == 'HostNode') {
                        simulator.broadcast(tempNode, target, stage);
                    }
                    choose_send = false;
                }

            } else if (button == 2) {
                if (target == null) {
                    pm1.showAt(x, y);
                } else if (target.userData.customClassName == 'HostNode') {
                    pm2.showAt(x, y);
                } else if (target.userData.customClassName == 'JuncionNode') {
                    pm3.showAt(x, y);
                }
            } else if (button == 1) {
                console.warn("target", target);
            }
        });
        is.on('mousedown', () => {
            pm1.hide();
            pm2.hide();
        });
    }
}

export const topoManager = new Manager();