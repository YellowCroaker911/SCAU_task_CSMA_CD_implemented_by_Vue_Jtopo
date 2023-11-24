import {
    Node,
    Link,
    randomColor,
    Shape
} from '@jtopo/core';

class CustomObject {

    // 创建终端节点
    hostNode(text, x, y, h, w) {
        let node = new Node(text, x, y, h, w);
        node.setUserData({
            customClassName: 'HostNode',
            /* 
            占有者，属于一个tag，用于导出当前的状态，
            如占有者为自己则是发送态，
            是发送方则是接受态，
            是其他终端则是信道忙状态，
            是连接点则是退避态
            */
            owner: null,
            // 时间戳，比较两个节点中哪一个节点先接收到数据，用于绘制信道动画的流向
            timeStamp: Date.now(),
            // 记录节点的状态
            state: '监听-信道闲',
            /*
            传输时间戳，用于计算接收、发送时间，
            因为发送态和接收态都可能被退避态打断，不能正常结束传输
            还有，例如当控制发送时间为x秒时，x秒后需要再发送一个结束帧，
            此时先判断当前时间距离时间戳是否已经过了x秒，否则不发送结束帧，
            因为有可能节点中途退避了然后又发送了一次
            具体应用实现在Executor的send函数
            */
            transmissionStamp: null,
            /*
            退避时间戳，用于计算退避时间
            因为退避态可能被信道忙和接收态或者新的退避态打断
            */
            withdrawStamp: null,
            /*
            记录将要退避的事件
            */
            withdrawTime: null,
            /*
            goals和tims组成一个存储二元数据的队列，goals存储发送目标，times存储发送时间
            在执行器初始化或手动增加发送任务时，这个队列会进队一个新的数据，
            执行器会定期检查所有节点的这个队列，如果存在数据则执行发送-接收发送的操作
            如果正常发送完毕，则删除数据，如果被打断了，则保留，等到下一次发送
            */
            goals: null,
            times: null,
            // 记录重传次数
            collisions: 0,
        });
        node.setShape(Shape.polygon(6));
        node.css({
            lineWidth: 3,
            strokeStyle: '#E1E1E1',
            fillStyle: randomColor(),
        });
        return node;
    }

    // 创建连接点
    juncionNode(text, x, y, h, w) {
        let node = new Node("", x, y, h, w);
        node.setUserData({
            customClassName: 'JuncionNode',
            owner: null,
            timeStamp: Date.now(),
        });
        node.setShape(Shape.polygon(12));
        node.css({
            lineWidth: 3,
            strokeStyle: '#E1E1E1',
            fillStyle: 'black',
        });
        return node;
    }

    // 创建信道
    channelLink(text, node1, node2) {
        let link = new Link(text, node1, node2);
        link.setUserData({
            customClassName: 'ChannelLink',
            owner: null,
            /* 
            存储自身的动画控制器，可以在状态变换时变换动画
            但也因此形成了自环（动画控制器也指向了自身）
            导致动画开启后无法保存到json文件
            */
            animate: null,
            timeStamp: Date.now(),
        });
        link.css({
            lineDash: [6, 2],
            lineWidth: '3',
            strokeStyle: 'black',
        });
        return link;
    }

    /* 
    创建代表发送首帧和发送尾帧的动画滑块，
    具体功用参见node.md和readme.md（目前版本没放到readme.md上）
    */
    frameNode(originNode, goalNode) {
        let node = new Node('', 0, 0, 20, 10);
        node.setUserData({
            customClassName: 'FrameNode',
            owner: originNode,
            // 目标节点
            goal: goalNode,
        });
        node.css({
            background: node.userData.owner.style.fillStyle,
        });
        return node;
    }
}

export const customObject = new CustomObject();