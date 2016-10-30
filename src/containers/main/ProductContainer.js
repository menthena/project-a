// import React from 'react';
// import {connect} from 'react-redux';
// import styles from './style.css';
// import Query from '../../components/query';
// import ProductList from '../../components/ProductList';
// import {fetchCategories} from '../../actions/productActions';
//
// class ProductContainer extends React.Component {
//   componentDidMount() {
//     this.props.fetchProductsByCategoryId(this.props.categoryId);
//   }
//
//   render() {
//     return (
//       <div className={styles.content}>
//         <ProductList {...this.props} />
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     products: state.productReducer.products,
//     isFetching: state.productReducer.isFetching
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProductsByCategoryId: (categoryId) => dispatch(fetchProductsByCategoryId(categoryId))
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
