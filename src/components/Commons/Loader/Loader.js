//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import ReactLoader from 'react-loader-spinner';
//Styles
import { LoaderWrapperDiv } from './Loader.styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

//Custom css
// const beatCss = css`
// 	display: block;
// 	margin: calc(100vh * 0.4) auto;
// `;

const Loader = ({ onLoad }) => (
	<LoaderWrapperDiv>
		<ReactLoader type="Puff" color="#00BFFF" height={80} width={80} visible={onLoad} />
	</LoaderWrapperDiv>
);

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

Loader.defaultProps = {
	onLoad: false,
};

export default Loader;
