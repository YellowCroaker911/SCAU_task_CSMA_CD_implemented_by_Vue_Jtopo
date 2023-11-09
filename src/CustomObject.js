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
    Shape
} from '@jtopo/core';

class CustomObject {

    hostNode(text, x, y, h, w) {
        let node = new Node(text, x, y, h, w);
        node.setUserData({
            customClassName: 'HostNode',
            owner: null,
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
        let node = new Node(text, x, y, h, w);
        node.setUserData({
            customClassName: 'JuncionNode',
            owner: null,
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
        });
        link.css({
            lineWidth: '3',
        });
        return link;
    }

    frameNode(originNode, goalNode, beginNode) {
        let node = new Node('', 0, 0, 20, 10);
        node.setUserData({
            customClassName: 'FrameNode',
            owner: originNode,
            goal: goalNode,
            begin: beginNode,
        });
        node.css({
            background: node.userData.owner.style.fillStyle,
        });
        return node;
    }
}

export const customObject = new CustomObject();