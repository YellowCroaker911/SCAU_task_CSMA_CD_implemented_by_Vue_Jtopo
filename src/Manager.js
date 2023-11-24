import {
    Stage,
    Layer,
    PopupMenu
} from '@jtopo/core';
import { provider } from './Provider';
import { Executor } from './Executor';
import { constant } from './Constant';

class Manager {
    stage;
    layer;

    // 模版的程序入口
    init(divObj) {
        const stage = new Stage(divObj);
        const layer = new Layer('default');

        stage.addChild(layer);
        stage.show();

        this.stage = stage;
        this.layer = layer;
        this.executor = new Executor(stage, layer);

        this.loadConfig();
        this.initEvent();
    }

    // 加载初始配置
    loadConfig() {
        const stage = this.stage;
        const layer = this.layer;
        layer.css({
            background: 'white',
        });

        // 这里是删除模板里面多余的按钮
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

        // 这里是设置当导入json文件存档后自动更新画布颜色并为child添加响应事件，以及初始化一些属性
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
                        if (child.userData.customClassName == 'HostNode') {
                            child.userData.goals = [];
                            child.userData.times = [];
                            child.userData.collisions = 0; // 使用新的json文件存档时可以将这行删除
                        }
                    }
                });
            })
        });

        // 增加一个开始执行模拟的按钮，点击后调用Executor的execute函数
        let img = document.createElement('img');
        img.src = 'imges\\开始.svg';
        img.style.width = '24px';
        img.style.height = 'auto';
        let bt = document.createElement('button');
        bt.title = '开始模拟';
        bt.appendChild(img);
        stage.toolbar.domObj.appendChild(bt);

        bt.addEventListener("click", () => {
            this.executor.execute();
        })

        // 不会导出consol.log()信息到文本文档，所以这里不做了

        // img = document.createElement('img');
        // img.src = 'imges\\查看.svg';
        // img.style.width = '24px';
        // img.style.height = 'auto';
        // bt = document.createElement('button');
        // bt.title = '输出日志';
        // bt.appendChild(img);
        // stage.toolbar.domObj.appendChild(bt);

    }

    // 初始化响应事件，不再赘述，看看API玩玩程序就懂了
    initEvent() {
        const stage = this.stage;
        const layer = this.layer;

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
                        this.executor.addPackage(tempNode, target, constant.SEND_TIME);
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