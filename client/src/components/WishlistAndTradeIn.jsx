import React from 'react';

class WishlistAndTradeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="wishlistAndTradeValue">
        <div className="addToWishlist">
          ADD TO WISHLIST
        </div>
        <div className="seeTradeValue">
          SEE TRADE VALUE
        </div>
      </div>
    )
  }
}

export default WishlistAndTradeIn;
