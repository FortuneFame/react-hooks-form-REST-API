import React, { Component } from 'react';

// import SignupForm from './components/SignupForm';
// import { GlobalStyle } from './GlobalStyle';
// import ProductReviewForm from './components/ProductReviewForm';
// import LoginForm  from './components/LoginForm';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter'; 
// import Clock from './components/Clock';
// import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import PokemonView from './views/PokemonView';


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


export default class App extends Component {
  render() {
    return (
      <>
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter /> */}
        {/* <SignupForm /> */}
        {/* <GlobalStyle /> */}
        {/* <LoginForm /> */}
        {/* <ProductReviewForm /> */}
        {/* <Clock /> */}
        {/* <SkipEffectOnFirstRender /> */}
        <PokemonView />

      </>
    );
  }
}