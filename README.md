# BCMarketplace CarouselFusion

## What It Does

CarouselFusion adds responsive image carousels to your Magento storefront. It's built on Owl Carousel and includes accessibility features for better user experience.

## Installation

1. Install via Composer:
   ```bash
   composer require bcmarketplace/module-carousel-fusion
   ```

2. Enable the module:
   ```bash
   bin/magento module:enable BCMarketplace_CarouselFusion
   ```

3. Run setup upgrade:
   ```bash
   bin/magento setup:upgrade
   ```

4. Deploy static content:
   ```bash
   bin/magento setup:static-content:deploy -f
   ```

5. Clear cache:
   ```bash
   bin/magento cache:flush
   ```

## How to Use

### In Templates

Add this HTML to your template:

```html
<div class="owl-carousel" data-mage-init='{"owlCarousel": {"items": 3, "loop": true}}'>
    <div class="item">Slide 1</div>
    <div class="item">Slide 2</div>
    <div class="item">Slide 3</div>
</div>
```

### Common Options

- **items**: Number of items to show (default: 3)
- **loop**: Enable infinite loop (default: false)
- **nav**: Show navigation arrows (default: false)
- **dots**: Show pagination dots (default: true)
- **autoplay**: Auto-play carousel (default: false)

For more options, see the [Owl Carousel Documentation](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)

## Troubleshooting

**Carousel not showing?**
- Clear cache: `bin/magento cache:flush`
- Deploy static content: `bin/magento setup:static-content:deploy -f`
- Check browser console for errors

**Styles not working?**
- Clear cache and redeploy static content
- Check that your theme isn't overriding the styles

## Support

**Author**: Raphael Baako  
**Email**: rbaako@baakoconsultingllc.com  
**Company**: Baako Consulting LLC

## License

Proprietary - All rights reserved.

**Note**: This module includes Owl Carousel v2.3.4, which is licensed under the MIT License.
