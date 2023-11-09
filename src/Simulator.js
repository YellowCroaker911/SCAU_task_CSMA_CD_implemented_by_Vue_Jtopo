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
import { customObject } from './CustomObject';

class Simulator {

    broadcast(originNode, goalNode, as) {
        this.forward(originNode, goalNode, originNode, null, as)
    }

    forward(originNode, goalNode, beginNode, fromLink, as) {
        let links = beginNode.getLinks();
        links.forEach(link => {
            if (link != fromLink) {
                this.addAnimate(originNode, goalNode, beginNode, link, as);
            }
        });
    }

    addAnimate(originNode, goalNode, beginNode, link, as) {
        let frameNode = customObject.frameNode(originNode, goalNode, beginNode);
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
            duration: len * 10,
            times: 1,
            direction: direction,
            effect: 'easeInOutQuad',
            update: function(n) {
                frameNode.setOrigin(0, n);
            },
        }).play().then(() => {
            frameNode.removeFromParent()
            simulator.forward(frameNode.userData.owner, goalNode, endNode, link, as)
        });
    }

}

export const simulator = new Simulator();