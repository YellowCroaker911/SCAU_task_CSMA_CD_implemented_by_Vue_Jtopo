import { Simulator } from './Simulator';
import { constant } from './Constant';

export class Executor {

    constructor(stage, layer) {
        this.stage = stage;
        this.layer = layer
        this.simulator = new Simulator(stage)
        this.sleep = time => {
            return new Promise(resolve => setTimeout(resolve, time));
        }
    }

    // 执行模拟，每持续一段很小的时间就调用send函数来模拟节点需要发送数据
    execute() {
        let childs = this.layer.getChildren();
        let hostNodeChilds = []
        childs.forEach(child => {
            if (child.userData.customClassName == 'HostNode') {
                hostNodeChilds.push(child);
            }
        });
        this.randAddPackage(hostNodeChilds, constant.INIT_PACKAGE);
        const interval = setInterval(() => {
            hostNodeChilds.forEach(child => {
                this.send(child);
            });
        }, 0.1);
    }

    // 随机生成一些数据包（发送任务）分配到局域网的节点中
    randAddPackage(hostNodeChilds, times) {
        let len = hostNodeChilds.length;
        if (len < 2) {
            return
        }
        for (let i = 0; i < times; i++) {
            let r1;
            let r2;
            while (true) {
                r1 = Math.floor(Math.random() * len)
                r2 = Math.floor(Math.random() * len)
                if (r1 != r2) {
                    break;
                }
            }
            let origin = hostNodeChilds[r1];
            let goal = hostNodeChilds[r2];
            let time = constant.SEND_TIME;
            this.addPackage(origin, goal, time);
        }
    }

    // 新增一个数据包（发送任务），用于Manager那边通过鼠标点击直接调用
    addPackage(origin, goal, time) {
        origin.userData.goals.push(goal);
        origin.userData.times.push(time);
    }

    /*
    执行节点的数据发送，
    如果节点处于信道闲状态并且有数据要发送，
    就调用Simulator那边的broadcast函数发送首帧
    并等到发送时间足够后再次调用broadcast函数发送尾帧
    */
    send(origin) {
        if (origin.userData.goals.length == 0) {
            return
        }
        if (origin.userData.state == '监听-信道闲') {
            this.simulator.broadcast(origin, origin.userData.goals[0]);
            this.sleep(origin.userData.times[0]).then(() => {
                if (origin.userData.state == '发送') {
                    if (Date.now() - origin.userData.transmissionStamp >= origin.userData.times[0]) {
                        this.simulator.broadcast(origin, origin, origin.userData.goals[0]);
                    }
                }
            });
        }
    }

}