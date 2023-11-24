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

    addPackage(origin, goal, time) {
        origin.userData.goals.push(goal);
        origin.userData.times.push(time);
    }


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