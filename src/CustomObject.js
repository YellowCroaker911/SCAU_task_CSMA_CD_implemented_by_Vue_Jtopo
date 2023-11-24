import {
    Node,
    Link,
    randomColor,
    Shape
} from '@jtopo/core';

class CustomObject {

    hostNode(text, x, y, h, w) {
        let node = new Node(text, x, y, h, w);
        node.setUserData({
            customClassName: 'HostNode',
            owner: null,
            timeStamp: Date.now(),
            state: '监听-信道闲',
            transmissionStamp: null,
            withdrawStamp: null,
            withdrawTime: null,
            goals: null,
            times: null,
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

    channelLink(text, node1, node2) {
        let link = new Link(text, node1, node2);
        link.setUserData({
            customClassName: 'ChannelLink',
            owner: null,
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

    frameNode(originNode, goalNode) {
        let node = new Node('', 0, 0, 20, 10);
        node.setUserData({
            customClassName: 'FrameNode',
            owner: originNode,
            timeStamp: Date.now(),
            goal: goalNode,
        });
        node.css({
            background: node.userData.owner.style.fillStyle,
        });
        return node;
    }
}

export const customObject = new CustomObject();