import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import Photo from './Portfolio2griditem';

class Portfolio3grid extends Component {
  state = {
    activeItem: '*',
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded('#work-portfolio');

    imgLoad.on('progress', function (instance, image) {
      this.iso = new Isotope('#work-portfolio', {
        itemSelector: '.portfolio_item',
        layoutMode: 'masonry',
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope('#work-portfolio', {
        itemSelector: '.portfolio_item',
        layoutMode: 'masonry',
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? 'active' : '');

  render() {
    return (
      <section className="portfolio_area sec_pad bg_color">
        <div className="container">
          <div id="portfolio_filter" className="portfolio_filter mb_50">
            <div
              data-filter="*"
              className={`work_portfolio_item ${this.onActive('*')}`}
              onClick={() => {
                this.onFilterChange('*');
              }}
            >
              All
            </div>
            <div
              data-filter="brand"
              className={`work_portfolio_item ${this.onActive('web')}`}
              onClick={() => {
                this.onFilterChange('brand');
              }}
            >
              2019
            </div>
            <div
              data-filter="develop"
              className={`work_portfolio_item ${this.onActive('develop')}`}
              onClick={() => {
                this.onFilterChange('develop');
              }}
            >
              2020
            </div>
            <div
              data-filter="web"
              className={`work_portfolio_item ${this.onActive('web')}`}
              onClick={() => {
                this.onFilterChange('web');
              }}
            >
              2021
            </div>
            {/* <div data-filter="fashion" className={`work_portfolio_item ${this.onActive('fashion')}`} onClick={() => {this.onFilterChange("fashion")}}>Fashion</div>
                        <div data-filter="ux" className={`work_portfolio_item ${this.onActive('ux')}`} onClick={() => {this.onFilterChange("ux")}}>UI/UX</div>
                        <div data-filter="product" className={`work_portfolio_item ${this.onActive('product')}`} onClick={() => {this.onFilterChange("product")}}>Product</div> */}
          </div>
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/1.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/2.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/3.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/4.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/5.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/6.jpg"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/7.JPG"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/8.JPG"
              ptitle="ISIF 2019"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 brand"
              pImg="3-columns/9.jpg"
              ptitle="ISIF 2019"
            />

            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/1.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/2.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/3.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/4.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/5.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 develop"
              pImg="3-columns/2020/6.jpg"
              ptitle="2020"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/1.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/2.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/3.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/4.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/5.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/6.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/7.jpg"
              ptitle="2021"
            />
            <Photo
              colClass="col-lg-4 col-sm-6 web"
              pImg="3-columns/2021/8.jpg"
              ptitle="2021"
            />

            {/* example */}
            {/* <Photo colClass="col-lg-4 col-sm-6 web" pImg="3-columns/2020/2.jpg" ptitle="2020" />
            <Photo colClass="col-lg-4 col-sm-6 fashion" pImg="3-columns/2020/3.jpg" ptitle="2020" />
            <Photo colClass="col-lg-4 col-sm-6 ux brand" pImg="3-columns/2020/4.jpg" ptitle="2020" />
            <Photo colClass="col-lg-4 col-sm-6 product" pImg="3-columns/2020/5.jpg" ptitle="2020"  />
            <Photo colClass="col-lg-4 col-sm-6 develop fashion" pImg="3-columns/2020/6.jpg" ptitle="2020" />
            <Photo colClass="col-lg-4 col-sm-6 brand ux" pImg="3-columns/3_col_8.jpg" ptitle="Inner Smart Watch" tOne="Brand" tTwo="UX"/>
            <Photo colClass="col-lg-4 col-sm-6 brand web" pImg="3-columns/3_col_9.jpg" ptitle="Portfolio Masonry" tOne="Brand" tTwo="UX"/>
            <Photo colClass="col-lg-4 col-sm-6 develop" pImg="3-columns/3_col_10.jpg" ptitle="Interior Design" tOne="Develop"/>
            <Photo colClass="col-lg-4 col-sm-6 fashion" pImg="3-columns/3_col_11.jpg" ptitle="Portfolio Masonry" tOne="fashion"/>
            <Photo colClass="col-lg-4 col-sm-6 develop fashion" pImg="3-columns/3_col_12.jpg" ptitle="Double Exposure" tOne="Develop" tTwo="Fashion"/> */}
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio3grid;
