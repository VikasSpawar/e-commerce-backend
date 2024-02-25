
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    badge: {
      code: String,
      color: String,
      displayName: String,
      name: String,
      subscript: String
    },
    baseOptions: [{
      options: [{
        code: String,
        images: [{
          format: String,
          imageType: String,
          url: String
        }],
        name: String,
        priceData: {
          currencyIso: String,
          formattedValue: String,
          priceType: String,
          value: Number
        },
        stock: {
          isValueRounded: Boolean,
          stockLevelStatus: String
        },
        url: String,
        variantOptionQualifiers: [{
          code: String,
          name: String,
          qualifier: String,
          value: String
        }]
      }]
    }],
    baseProduct: String,
    baseProductName: String,
    classifications: [{
      code: String,
      features: [{
        code: String,
        comparable: Boolean,
        featureValues: [{
          value: String
        }],
        name: String,
        range: Boolean
      }],
      name: String
    }],
    code: String,
    configurable: Boolean,
    configuratorType: String,
    description: String,
    images: [{
      format: String,
      imageType: String,
      url: String
    }],
    isEligibleForEarlyAccess: Boolean,
    isNotifyMeEnabled: Boolean,
    isSwag: Boolean,
    isVIPAccessible: Boolean,
    multidimensional: Boolean,
    name: String,
    price: {
      currencyIso: String,
      formattedValue: String,
      priceType: String,
      value: Number
    },
    priceRange: {},
    stock: {
      isValueRounded: Boolean,
      stockLevelStatus: String
    },
    summary: String,
    uniqueSellingPoints: [String],
    url: String,
    variantOptions: [{
      variantOptionQualifiers: [{
        code: String,
        name: String,
        qualifier: String,
        value: String
      }]
    }],
    volumePricesFlag: Boolean
  });
  
  module.exports = mongoose.model('Product', productSchema);
