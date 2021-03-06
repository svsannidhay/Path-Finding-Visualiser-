import React from 'react';


class Node extends React.Component {
  
  render () {
    return (
      <div className="board__node">
        <div onClick = {() => this.props.onNodeSelect(this.props.row,this.props.col)} id = {`${this.props.row}+${this.props.col}`} className = {`board__node--content ${this.props.row}+${this.props.col} board__node--gradient-border`}></div>
      </div>  
    );
  }
};

export default Node;
