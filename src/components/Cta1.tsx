import React, { Component } from "react";
import PropTypes from "prop-types";

export class CTA1 extends Component {
  static propTypes = {};

  render() {
    return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
            <button class="btn btn-primary btn-lg">Button</button>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA1;
