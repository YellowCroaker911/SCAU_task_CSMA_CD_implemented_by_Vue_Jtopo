class Provider {

    newNode(mode, x, y) {
        let node;
        let text = mode + x.toFixed(0).toString() + ":" + y.toFixed(0).toString();
        if (mode == '终端') {
            node = customObject.hostNode(text, x, y, 40, 40);
        } else if (mode == '连接点') {
            node = customObject.juncionNode(text, x, y, 20, 20);
        }
        node.on('mousedragend', () => {
            this.updateNode(node);
        });
        return node;
    }

    newLink(node1, node2) {
        var repeat = false;
        if (node1.userData.customClassName == 'HostNode' && node2.userData.customClassName == 'HostNode') {
            return null;
        }
        let links = node1.getLinks();
        let nodes = [];
        links.forEach(link => {
            nodes.push(link.begin.target)
            nodes.push(link.end.target)
        });
        nodes.forEach(node => {
            if (node.id == node2.id) {
                repeat = true;
            }
        })
        if (repeat == true) {
            return null;
        }
        let link = customObject.channelLink(this._calDist(node1, node2), node1, node2);
        return link;
    }

    updateNode(node) {
        if (node.userData.customClassName == 'HostNode') {
            node.setText('终端' + node.x.toFixed(0).toString() + ":" + node.y.toFixed(0).toString())
        } else if (node.userData.customClassName == 'JuncionNode') {
            // node.setText('连接点' + node.x.toFixed(0).toString() + ":" + node.y.toFixed(0).toString())
        }
        let links = node.getLinks();
        links.forEach(link => {
            link.label.setText(this._calDist(link.begin.target, link.end.target))
        });
    }

    _calDist(node1, node2) {
        let deltaX = node1.x - node2.x;
        let deltaY = node1.y - node2.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY).toFixed(0).toString()
    }


}

export const provider = new Provider();