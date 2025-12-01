# BCMarketplace CarouselFusion

## What It Does

CarouselFusion adds responsive image carousels to your Magento storefront. It's built on Owl Carousel and includes accessibility features for better user experience.

## Installation

### Prerequisites

- Magento 2.4.x (Community or Enterprise Edition)
- PHP 8.2 or 8.3
- Composer 2.x

### Step 1: Configure Repository

Since this is a private package, you need to add the repository to your `composer.json`. You can do this using one of the following methods:

#### Option A: Using Composer Config (Recommended)

```bash
# Add the CarouselFusion repository
composer config repositories.bcmarketplace-carousel-fusion vcs git@github.com:bcmarketplace/module-carousel-fusion.git

# Add the Base module repository (required dependency)
composer config repositories.bcmarketplace-base vcs git@github.com:bcmarketplace/module-base.git
```

#### Option B: Manual Configuration

Add the following to your `composer.json` file:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "git@github.com:bcmarketplace/module-carousel-fusion.git"
    },
    {
      "type": "vcs",
      "url": "git@github.com:bcmarketplace/module-base.git"
    }
  ]
}
```

### Step 2: Install the Module

#### Install Stable Version

```bash
composer require bcmarketplace/module-carousel-fusion
```

This will automatically install the required `bcmarketplace/module-base` dependency.

#### Install from Develop Branch (Latest Development Version)

```bash
composer require bcmarketplace/module-carousel-fusion:dev-develop
```

### Step 3: Enable the Module

```bash
bin/magento module:enable BCMarketplace_CarouselFusion
```

### Step 4: Run Setup Upgrade

```bash
bin/magento setup:upgrade
```

### Step 5: Deploy Static Content

```bash
bin/magento setup:static-content:deploy -f
```

### Step 6: Clear Cache

```bash
bin/magento cache:flush
```

### Complete Installation Command Sequence

```bash
# Configure repositories
composer config repositories.bcmarketplace-carousel-fusion vcs git@github.com:bcmarketplace/module-carousel-fusion.git
composer config repositories.bcmarketplace-base vcs git@github.com:bcmarketplace/module-base.git

# Install module
composer require bcmarketplace/module-carousel-fusion

# Enable and setup
bin/magento module:enable BCMarketplace_CarouselFusion
bin/magento setup:upgrade
bin/magento setup:static-content:deploy -f
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
