import { customObject } from './CustomObject';
import { constant } from './Constant';


export class Simulator {

    constructor(stage) {
        this.stage = stage;
        this.sleep = time => {
            return new Promise(resolve => setTimeout(resolve, time));
        }
    }

    broadcast(originNode, goalNode) {
        let frameNode = customObject.frameNode(originNode, goalNode);
        this.updateNodeState(originNode, frameNode);
        this.forward(originNode, goalNode, originNode, null)
    }

    forward(originNode, goalNode, beginNode, fromLink) {
        let links = beginNode.getLinks();
        links.forEach(link => {
            if (link != fromLink) {
                this.pass(originNode, goalNode, beginNode, link);
            }
        });
    }

    pass(originNode, goalNode, beginNode, link) {
        let as = this.stage.animationSystem;
        let frameNode = customObject.frameNode(originNode, goalNode);
        let len = Number(link.label.text);
        link.addChild(frameNode);
        var direction;
        var endNode;
        if (link.begin.target == beginNode) {
            endNode = link.end.target;
            direction = 'normal';
        } else {
            endNode = link.begin.target;
            direction = 'reverse';
        }
        as.anime({
            from: 0,
            to: 1,
            duration: len * constant.PASS_TIME,
            times: 1,
            direction: direction,
            effect: 'easeInOutQuad',
            update: function(n) {
                frameNode.setOrigin(0, n);
            },
        }).play().then(() => {
            if (this.updateNodeState(endNode, frameNode) == true) {
                this.forward(frameNode.userData.owner, goalNode, endNode, link)
            }
            frameNode.removeFromParent()
        });
    }

    updateNodeState(node, frameNode) {
        if (node.userData.customClassName == 'HostNode') {
            if (node.userData.state == '监听-信道闲') {
                if (frameNode.userData.owner.userData.customClassName == 'JuncionNode') {
                    // 碰撞信息到达，进行退避
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                    node.userData.state = '退避';
                    this.transmission_call(node, '结束', '监听-信道闲', '退避');
                } else {
                    if (node == frameNode.userData.owner) {
                        // 首帧送出，进入发送态
                        this.consoleState(node.userData.state, '发送', node);
                        node.userData.state = '发送';
                        this.changeNodeOwner(node, frameNode.userData.owner);
                        this.transmission_call(node, '开始', '监听-信道闲', '发送');
                    } else {
                        // 其他终端的首帧到达
                        if (node == frameNode.userData.goal) {
                            // 发送方首帧到达，进入接收态
                            this.consoleState(node.userData.state, '接收', node);
                            node.userData.state = '接收';
                            this.changeNodeOwner(node, frameNode.userData.owner);
                            this.transmission_call(node, '开始', '监听-信道闲', '接收');
                        } else {
                            // 非发送方首帧到达，进入监听-信道忙状态
                            this.consoleState(node.userData.state, '监听-信道忙', node);
                            node.userData.state = '监听-信道忙';
                            this.changeNodeOwner(node, frameNode.userData.owner);
                        }
                    }
                }
            } else if (node.userData.state == '退避') {
                if (frameNode.userData.owner.userData.customClassName == 'JuncionNode') {
                    // 碰撞信息到达，进行退避
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                    node.userData.state = '退避';
                } else {
                    if (node == frameNode.userData.goal) {
                        // 发送方首帧到达，进入接收态
                        this.consoleState(node.userData.state, '接收', node);
                        node.userData.state = '接收';
                        this.changeNodeOwner(node, frameNode.userData.owner);
                        this.transmission_call(node, '开始', '退避', '接收');
                    } else {
                        // 非发送方首帧到达，进入监听-信道忙状态
                        this.consoleState(node.userData.state, '监听-信道忙', node);
                        node.userData.state = '监听-信道忙';
                        this.changeNodeOwner(node, frameNode.userData.owner);
                    }
                }
            } else if (node.userData.state == '发送') {
                if (node == frameNode.userData.owner) {
                    // 尾帧送出，进入监听-信道闲状态
                    this.consoleState(node.userData.state, '监听-信道闲', node);
                    node.userData.state = '监听-信道闲';
                    this.changeNodeOwner(node, null);
                    this.transmission_call(node, '结束', '发送', '监听-信道闲');
                } else {
                    // 碰撞信息到达，进行退避
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                    node.userData.state = '退避';
                    this.transmission_call(node, '结束', '发送', '退避');
                }
            } else if (node.userData.state == '接收') {
                if (node == frameNode.userData.goal) {
                    // 发送方尾帧到达，进入监听-信道闲状态
                    this.consoleState(node.userData.state, '监听-信道闲', node);
                    node.userData.state = '监听-信道闲';
                    this.changeNodeOwner(node, null);
                    this.transmission_call(node, '结束', '接收', '监听-信道闲');
                } else {
                    // 碰撞信息到达，进行退避
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                    node.userData.state = '退避';
                    this.transmission_call(node, '结束', '接收', '退避');
                }
            } else if (node.userData.state == '监听-信道忙') {
                if (node.userData.owner == frameNode.userData.owner) {
                    // 非发送方尾帧到达，进入监听-信道闲状态
                    this.consoleState(node.userData.state, '监听-信道闲', node);
                    node.userData.state = '监听-信道闲';
                    this.changeNodeOwner(node, null);
                } else {
                    // 碰撞信息到达，进行退避
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                    node.userData.state = '退避';
                    this.transmission_call(node, '结束', '监听-信道忙', '退避');
                }
            }
        } else {
            if (node.userData.owner != null && node.userData.owner.userData.customClassName == 'JuncionNode') {
                // 碰撞信息已到达该连接点
                if (frameNode.userData.owner.userData.customClassName != 'JuncionNode') {
                    // 终端信息到达该连接点
                    // this.forward(node, null, node, null);
                    // this.withdraw_call(node);
                    return false;
                } else {
                    // 新的碰撞信息到达该连接点
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                }
            } else {
                // 碰撞信息尚未到达该连接点
                if (frameNode.userData.owner.userData.customClassName == 'JuncionNode') {
                    // 碰撞信息到达该连接点
                    this.changeNodeOwner(node, frameNode.userData.owner);
                    this.withdraw_call(node);
                } else if (node.userData.owner == frameNode.userData.owner) {
                    // 占有方尾帧达到该节点，退出传输
                    this.changeNodeOwner(node, null);
                } else {
                    if (node.userData.owner == null) {
                        // 占有方首帧到达该连接点，进入传输
                        this.changeNodeOwner(node, frameNode.userData.owner);
                    } else {
                        // 其他信息到达该连接点，发生碰撞，一段时间后恢复正常
                        this.cloosion_call(node);
                        this.forward(node, null, node, null);
                        this.withdraw_call(node);
                        return false;
                    }
                }
            }
        }
        return true;
    }

    changeNodeOwner(node, owner) {
        node.userData.owner = owner;
        node.userData.timeStamp = Date.now();
        if (owner == null) {
            node.css({
                strokeStyle: '#E1E1E1',
            });
        } else {
            node.css({
                strokeStyle: owner.style.fillStyle,
            });
        }
        let links = node.getLinks();
        links.forEach(link => {
            this.changeLinkOwner(link);
        });
    }

    changeLinkOwner(link) {
        let es = this.stage.effectSystem;

        if (link.userData.animate == null) {
            link.userData.animate = es.flow(link, {
                lineDash: [6, 2]
            });
        }

        if (link.begin.target.userData.owner == link.end.target.userData.owner &&
            link.begin.target.userData.owner != null &&
            link.begin.target.userData.owner.userData.customClassName != 'JuncionNode') {
            link.css({
                strokeStyle: link.begin.target.userData.owner.style.fillStyle,
            });
            if (link.begin.target.userData.timeStamp > link.end.target.userData.timeStamp) {
                [link.begin.target, link.end.target] = [link.end.target, link.begin.target];
            }
            link.userData.animate.play();
        } else {
            link.css({
                strokeStyle: 'black',
            });
            link.userData.animate.cancel();
        }
    }

    transmission_call(node, mode, state1, state2) {
        if (mode == '开始') {
            node.userData.transmissionStamp = Date.now();
            if (node.userData.collisions == 16) {
                console.error("重传次数已达到16");
            }
            node.userData.collisions = node.userData.collisions + 1;
            let ae = this.stage.effectSystem.rippling({
                count: 2,
                radius: 40,
                color: node.userData.owner.style.fillStyle,
            });
            let aeNode = ae.objects[0];
            node.addChild(aeNode);
            ae.play();
        } else if (mode == '结束') {
            node.removeAllChild();
            if (state1 == '发送') {
                if (state2 == '监听-信道闲') {
                    node.userData.goals.shift();
                    node.userData.times.shift();
                    node.userData.collisions = 0;
                }
            }
        }
    }

    withdraw_call(node) {
        if (node.userData.customClassName == 'HostNode') {
            node.userData.withdrawTime = this.withdraw_time(node.userData.collisions);
            this.consoleState(node.userData.state, '退避', node);
            node.userData.withdrawStamp = Date.now();
            this.sleep(node.userData.withdrawTime).then(() => {
                if (node.userData.state == '退避' && Date.now() - node.userData.withdrawTime >= node.userData.withdrawStamp) {
                    this.consoleState(node.userData.state, '监听-信道闲', node);
                    node.userData.state = '监听-信道闲';
                    this.changeNodeOwner(node, null);
                }
            });
        } else {
            this.sleep(constant.JUNCION_NODE_WITHDRAW_TIME).then(() => {
                this.changeNodeOwner(node, null);
            });
        }
    }

    withdraw_time(k) {
        if (k > 10) {
            k = 10;
        }
        let e = Math.floor(Math.random() * k);
        let coe = 2 ** e;
        let two_tao = constant.TWO_TAO;
        return coe * two_tao;
    }

    cloosion_call(node) {
        let ae = this.stage.effectSystem.rippling({
            count: 4,
            radius: 80,
            color: node.style.fillStyle,
        });
        let aeNode = ae.objects[0];
        node.addChild(aeNode);
        ae.play();
        this.sleep(3000).then(() => {
            ae.remove();
        });
    }

    consoleState(state1, state2, node) {
        var text = '';
        if (state1 == '监听-信道闲') {
            if (state2 == '退避') {
                text = "待退避时长 :\t" + String(node.userData.withdrawTime);
                this.msg(node, state1, state2, text);
            } else if (state2 == '发送') {
                text = "待发送时长 :\t" + String(node.userData.times[0]) + "\n" +
                    "重传次数 :\t" + String(node.userData.collisions);
                this.msg(node, state1, state2, text);
            } else if (state2 == '接收') {
                this.msg(node, state1, state2, text);
            } else if (state2 == '监听-信道忙') {
                this.msg(node, state1, state2, text);
            }
        } else if (state1 == '退避') {
            if (state2 == '退避') {
                text = "实际退避时长 :\t" + String(Date.now() - node.userData.withdrawStamp) + "\n" +
                    "待退避时长 :\t" + String(node.userData.withdrawTime);
                this.msg(node, state1, state2, text);
            } else if (state2 == '发送') {
                text = "实际退避时长 :\t" + String(Date.now() - node.userData.withdrawStamp) + "\n" +
                    "待发送时长 :\t" + String(node.userData.withdrawTime) + "\n" +
                    "重传次数 :\t" + String(node.userData.collisions);
                this.msg(node, state1, state2, text);
            } else if (state2 == '接收') {
                text = "实际退避时长 :\t" + String(Date.now() - node.userData.withdrawStamp);
                this.msg(node, state1, state2, text);
            } else if (state2 == '监听-信道忙') {
                text = "实际退避时长 :\t" + String(Date.now() - node.userData.withdrawStamp);
                this.msg(node, state1, state2, text);
            } else if (state2 == '监听-信道闲') {
                text = "实际退避时长 :\t" + String(Date.now() - node.userData.withdrawStamp);
                this.msg(node, state1, state2, text);
            }
        } else if (state1 == '发送') {
            if (state2 == '监听-信道闲') {
                text = "实际发送时长 :\t" + String(Date.now() - node.userData.transmissionStamp);
                this.msg(node, state1, state2, text);
            } else if (state2 == '退避') {
                text = "实际发送时长 :\t" + String(Date.now() - node.userData.transmissionStamp) + "\n" +
                    "待退避时长 :\t" + String(node.userData.withdrawTime);
                this.msg(node, state1, state2, text);
            }
        } else if (state1 == '接收') {
            if (state2 == '监听-信道闲') {
                text = "实际接收时长 :\t" + String(Date.now() - node.userData.transmissionStamp);
                this.msg(node, state1, state2, text);
            } else if (state2 == '退避') {
                text = "实际接收时长 :\t" + String(Date.now() - node.userData.transmissionStamp) + "\n" +
                    "待退避时长 :\t" + String(node.userData.withdrawTime);
                this.msg(node, state1, state2, text);
            }
        } else if (state1 == '监听-信道忙') {
            if (state2 == '监听-信道闲') {
                this.msg(node, state1, state2, text);
            } else if (state2 == '退避') {
                text = "待退避时长 :\t" + String(node.userData.withdrawTime);
                this.msg(node, state1, state2, text);
            }
        }
    }

    msg(node, state1, state2, text) {
        let date = new Date();
        let color = node.style.fillStyle;
        console.log("%c" +
            "[ " +
            date.getHours() + "h " +
            date.getMinutes() + "min " +
            date.getMilliseconds() + "ms " +
            "]" + "\n" +
            node.text + " :\t" + state1 + " ----> " + state2 +
            "\n" +
            text, 'color: ' + color);
    }
}