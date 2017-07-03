import React from 'react';
import PropTypes from 'react-proptypes';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Board = (props) => {
    const svgStyle = {
        overflow: 'visible'
    };

    const blockWidth = props.width / props.board.get('width');
    const blockHeight = props.height / props.board.get('height');

    const blocks = props.board.get('players', Immutable.Map()).map((blocks, playerId) => (
        blocks.map(block => (
            <rect
                key={`${block.get('x')}x${block.get('y')}:${props.players.getIn([playerId, 'color'])}`}
                x={block.get('x') * blockWidth}
                y={block.get('y') * blockHeight}
                width={blockWidth}
                height={blockHeight}
                fill={props.players.getIn([playerId, 'color'])} />
        ))
    )).toList().flatten();

    console.log(blocks);

    return (
        <svg style={svgStyle} fill="#2c3e50">
            <rect x={0} y={0} width={props.width} height={props.height} />
            {blocks}
        </svg>
    )
};

Board.propTypes = {
    players: ImmutablePropTypes.map.isRequired,
    board: ImmutablePropTypes.map.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

export default Board; 