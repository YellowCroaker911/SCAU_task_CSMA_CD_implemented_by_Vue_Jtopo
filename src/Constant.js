class Constant {
    constructor() {
        this.SEND_TIME = 20000; // 每次数据的发送时间，为简化模型，采用定值
        this.INIT_PACKAGE = 0; // 初始整个局域网中需要发送的数据次数
        this.TWO_TAO = 5000; // 争用期
        this.PASS_TIME = 10; // 帧节点在信道上的传播速率,10表示每100单位长度用时1秒(10*100=1000ms)
        // 连接点的退避时间，太小会导致碰撞信息来不及传递，太大会影响局域网内下一次的正常发送
        this.JUNCION_NODE_WITHDRAW_TIME = 2000;
    }
}

export const constant = new Constant();