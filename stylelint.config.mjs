/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "property-no-vendor-prefix": [
      true,
      { 
        ignoreProperties: ["-webkit-text-size-adjust"]
      }
    ],
    "value-keyword-case": [
      'lower',
      {
        ignoreKeywords: ['currentColor']
      }
    ]
  }
};