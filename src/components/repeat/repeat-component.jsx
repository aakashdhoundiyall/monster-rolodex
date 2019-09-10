import React,{Component} from 'react';

export const RepeatButton = (props) => {
    return (
      <button 
        aria-label='Play again.' 
        id='repeatButton' 
        onClick={props.onClick}>
      </button>
    );
  }