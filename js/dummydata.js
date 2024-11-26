const dummyData = {
  appetizer: [
    {
      name: "Edamame",
      description: "Japanese soybeans, warm and lightly salted",
      price: "6.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/4c12b4cf04c0811085a3ea86cd100766a2b1e554.webp",
    },
    {
      name: "Edamame Deluxe",
      description:
        "Tempura edamame and sweet potato sticks, homemade chipotle dip",
      price: "9.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/61b570525f7f7bebb8037e1e2d888b3cf6e703b8.webp",
    },
    {
      name: "Harumaki",
      description: "Mini spring rolls with hot sweet'n'sour dip",
      price: "7.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/50529739cc277f4cdf551962a8a06ab1a9a116d6.webp",
    },
    {
      name: "Jumping Birds",
      description: "Crispy fried karaage chicken with shichimi dip",
      price: "6.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/bff5f7d6067bd85a93fec2456db1368670baf3f9.webp",
    },
    {
      name: "Ground Bird Small",
      description: "Miso Soup, tasty chicken, ramen noodles, bean sprouts",
      price: "10.60$<",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/693e2c9094acd8c76c4ab5da285c6fa20c7c5a40.webp",
    },
    {
      name: "Satay Sticks",
      description: "Marinated chicken skewers with peanut sauce",
      price: "14.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/a4a3b65968bf9209874333dabc6f6ca3a464775c.webp",
    },
    {
      name: "Miso Soup",
      description: "Miso soup with Swiss tofu, carrots, soy sprouts",
      price: "8.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/5645457315702169a96c6e49f8124fb62787c089.webp",
    },
    {
      name: "Fujiyama Small",
      description:
        "Miso soup with Swiss tofu, ramen noodles, soy sprouts, vegetables",
      price: "10.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/b64b4867ae38ad103dc5d34cb25149de3801abfd.webp",
    },
    {
      name: "Tropical Zander Ceviche",
      description:
        "Nigiri Inari filled with zander ceviche, avocado, mango and coriander",
      price: "8.60$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/88b8860cb0810adaa93a9305ef09b11f7a69d9e6.webp",
    },
    {
      name: "Spicy Tuna Tatar",
      description: "Spicy premium tuna tatar with nori cracker",
      price: "13.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/df80f4b1ea68874d341267da11611969d6635743.webp",
    },
    {
      name: "Spicy Salmon Tatar",
      description: "Spicy salmon tatar with nori cracker",
      price: "11.90$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/bff5f7d6067bd85a93fec2456db1368670baf3f9.webp",
    },
    {
      name: "Sashimi Duo",
      description: "Finest sashimi duo of salmon and premium tuna",
      price: "20.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/c3c6850f58558a03a04aab2b538ed45852bf870c.webp",
    },
    {
      name: "Spicy Tuna Tatar",
      description: "Spicy premium tuna tatar with nori cracker",
      price: "13.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/d6e2e1989f3941d3effa03660f3404510b419e79.webp",
    },
  ],
  dimsum: [
    {
      name: "Pork Momo",
      description:
        "Steamed momos with pork meat, shiitake mushrooms and smokey honey flavour",
      price: "9.30$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/a77bd5e029b20a9aba596c7f50d495c174a4f09b.webp",
    },
    {
      name: "Beef Momo",
      description:
        "Steamed dumplings with beef, papaya and chili, with Ponzu sauce",
      price: "9.90$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/7831fe8cc23d35031005311e954ac53c7da7240d.webp",
    },
    {
      name: "Planted.pulled Momo",
      description: "Steamed dumpling with planted.pulled, snow peas, carrots",
      price: "9.30$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/f3872c4a6059786442341161735eb85f5c8e9615.webp",
    },
    {
      name: "Gyoza with Chicken",
      description: "Fried Japanese dumplings with chicken, with Ponzu sauce",
      price: "9.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/28606c6d7b96e4db499d83be8931ec26cd7a4688.webp",
    },
    {
      name: "Gyoza with Shrimps",
      description: "Fried Japanese dumplings with Shrimps, with Ponzu sauce",
      price: "9.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/f318cab4944cff0f40ab316c20e877cea70b21b9.webp",
    },
    {
      name: "Gyoza with Vegetables",
      description: "Fried Japanese dumplings with vegetables, with Ponzu sauce",
      price: "9.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/f74f0f8c0f02e0e8f625de743c8efcdba69ea284.webp",
    },
  ],
  bowlsandsoups: [
    {
      name: "Nippon Bridge",
      description: "Tantanmen noodle soup with no minced meat, sesame paste",
      price: "20.30$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/5dcd62f7cd0e984b480984e9752e9a0700fcae47.webp",
    },
    {
      name: "Fujiyama Small",
      description:
        "Miso soup with Swiss tofu, ramen noodles, soy sprouts, vegetables",
      price: "9.30$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/b64b4867ae38ad103dc5d34cb25149de3801abfd.webp",
    },
    {
      name: "Karaage Chicken Bowl",
      description: "Lukewarm bowl with crispy karaage chicken, jasmine",
      price: "19.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/c6dee6781e67adfe56579071e0e63ca68a125750.webp",
    },
    {
      name: "Ground Bird",
      description: "Ramen noodles in homemade broth with chicken",
      price: "22.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/70ea40b77dea1c55917dd90f5dcb50d4288cbc03.webp",
    },
    {
      name: "Mystic Mermaid Bowl",
      description:
        "Poke with sushi rice, salmon, edamame, cherry tomatoes, sweet mango",
      price: "22.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/eaefbc8048dbcf7d5e82547d5783ba6f8d7784a5.webp",
    },
    {
      name: "Green Meadow Tofu Bowl",
      description: "Poke with sushi rice, edamame, spinach",
      price: "10.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/ba90278f00dd76eabf1a19b8caa1cf451eac212b.webp",
    },
  ],
  sushirolls: [
    {
      name: "Crispy Nigiri Eggplant",
      description:
        "Eggplant with spicy veganaise and dried flowers on unique crispy sushi rice",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/052b14d474ff8377f41c4562ec624efdecd89aa6.webp",
    },
    {
      name: "Crispy Nigiri Avo",
      description: "Flambéed avocado with yuzu veganaise and microgreens",
      price: "3.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/b5ec359bf3bbaaebca24dd5982edca3627b2dc3e.webp",
    },
    {
      name: "Crispy Nigiri Salmon",
      description:
        "Salmon with veganaise and kizami wasabi on unique crispy sushi rice",
      price: "4.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/f2703911fffdfc9dfd5b6f06a606d88a1f3d07a9.webp",
    },
    {
      name: "Crispy Vuna",
      description:
        "Plant-based vunamousse with dried flowers on deep-fried futomaki roll",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/aa2b1b8373ba42dd1364e7511c6f22815aa37b6c.webp",
    },
    {
      name: "Tatar & Crunch",
      description: "Spicy salmon tartare with rice crackers and microleaves",
      price: "4.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/1ab17c5128fc5f6a29a33c094e9b7ae8cdd3426e.webp",
    },
    {
      name: "Crunchy Prawn Roll",
      description: "Deep-fried shrimps, mayonnaise, avocado, crunchy tempura",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/d807691771153f47348163b05eaf930ea2b0aa3c.webp",
    },
    {
      name: "Swiss Zander Roll",
      description:
        "Swiss Alps Zander in tempura and rice crackers, fresh spinach, tobiko",
      price: "3.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/04bd5c2606e7e8594027a154dc320c9b722ccc06.webp",
    },
    {
      name: "Scotman's Rainbow Roll",
      description:
        "Salmon, cream cheese, cucumber, chipotle dip, toasted sesame seeds",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/e13991ddd46007b00f05be12e72ee4592c0757fb.webp",
    },
    {
      name: "California Roll",
      description: "Surimi, Avocado, Mayonnaise, Tobiko",
      price: "4.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/4f59a7aa13f10dec2d85dff643a3693170e9cf10.webp",
    },
    {
      name: "Black Umami",
      description:
        "Black sushi rice, marinated radish, shiitake, avocado, pomegranate",
      price: "3.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/46e4c4b6970cbeefc011f5dc061713ee2eb4b3db.webp",
    },
    {
      name: "Wasabi-Carrot Roll",
      description:
        "Marinated carrots, vegan wasabi quinoa cream cheese, chives",
      price: "2.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/774f1a1f32a0e9d48a09721ca74b4c91b259fd42.webp",
    },
    {
      name: "Miso Roll",
      description: "Miso, avocado, veganaise, sweet potato fries, fried onions",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/4a94a3014c511f64e051ab4a6d48df61037eac99.webp",
    },
    {
      name: "Rainbow Roll Lachs",
      description: "Salmon, avocado",
      price: "3.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/ed0527dadfda103339cf96d6f200ca1ce5bd3854.webp",
    },
    {
      name: "Rainbow Roll Mango",
      description: "Mango, avocado",
      price: "3.40$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/cd02fd1af924bf8dbcd2c22f0609af07da51189d.webp",
    },
    {
      name: "Rainbow Roll Salmon loves Mango",
      description: "Salmon, avocado, mango",
      price: "4.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/b2bdb0060ae65026fcd4a893f129bd044c4c46e0.webp",
    },
    {
      name: "Tekka Maki",
      description: "Premium Tuna",
      price: "3.10$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/e86eeab3661873e7d66066aae8c02afd3c6b34f1.webp",
    },
    {
      name: "Shake Maki",
      description: "Salmon",
      price: "2.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/f8abe2ed50eb6aeae8e5a122a28e515425839e72.webp",
    },
    {
      name: "Shake on Guaca",
      description: "Salmon, avocado",
      price: "2.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/1b048e29f4dfdc4f13b528f79f8917dcce742dd3.webp",
    },
    {
      name: "Avos Maki",
      description: "Avocado",
      price: "2.10$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/a4dd977b88c6fd54bdbde51d393ae59dadd23136.webp",
    },
    {
      name: "Kappa Maki",
      description: "Cucumber",
      price: "1.90$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/ec3a18e0a275bcb650ee89c1f8790667e67a8c5e.webp",
    },
    {
      name: "Salmon Mint Maki",
      description: "Salmon, avocado, mint, rice leaf, 6 pcs.",
      price: "10.20$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/b05103e9c04714650e1c4b517f7af549d88a54fe.webp",
    },
    {
      name: "Nigiri Guaca",
      description: "Avocado, Shichimi sesame",
      price: "3.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/04b16e7d6e2d10d96ef9cd21f877d611b75d54fb.webp",
    },
    {
      name: "Nigiri Inari",
      description: "Sweet tofu pocket filled with rice",
      price: "3.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/22145f8d3e372a3a730ea7b610e4056883c71667.webp",
    },
    {
      name: "Nigiri Ebi",
      description: "Shrimps",
      price: "3.90$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/ce92ddc95e4e3d72b8a268bfb60de84ec0e33eee.webp",
    },
  ],
  sushiplates: [
    {
      name: "Tokyo Story",
      description: "Plate for two - Salmon and tuna Sashimi, Futomaki",
      price: "60.30$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product/51844a943027ff418982f93449510ce04af1713c.webp",
    },
  ],
  drinks: [
    {
      name: "Phoenix and Passion",
      description:
        "Infused Water with fresh passion fruit, currants, mint & thyme, sugarfree",
      price: "5.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/1e59daad86816d093f7aee410187d9f52bbe9a66.webp",
    },
    {
      name: "Happy Heart",
      description:
        "Spritzer with fresh passion fruit, orange juice & mineral water",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/37/82/5deb2670f1ee9b20073400327ec2.png",
    },
    {
      name: "House Ice Tea",
      description: "4dl, homemade",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/ff/45/8c5e4db27298fdae2d914c17a03d.png",
    },
    {
      name: "Cranberry Boost",
      description: "Spritzer with cranberry juice, lime & mineral water",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/b7/4a/dd298b3bb5d55b7a859ee8f859d3.png",
    },
    {
      name: "Hibiscus Flower Ice Tea",
      description: "4dl, Ice tea with hibiscus flowers, little sweetened",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/87/ef/c9b5842de3091746d0ba8feb9883.png",
    },
    {
      name: "Blueberry Lemonade",
      description: "Blueberry, Lemon & Grapefruit, reduced sugar",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/65/97/8e1c2d5c81f1336350bbfc1a9ce5.png",
    },
    {
      name: "Aperol Spicy Ginger",
      description: "Aperol, Spicy Ginger Ale, fresh mint",
      price: "8.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/2eca4ec12f72d17fc4d4206868b3930be541f386.webp",
    },
    {
      name: "White Wine Sweet",
      description: "sweet",
      price: "8.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/373f8c5be87f41b70938ebe3531b545d28bdfffd.webp",
    },
    {
      name: "Hibiscus Flower",
      description: "Prosecco with hibiscus flower",
      price: "7.50$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/9f/d0/79860651971eb664690e314eae67.png",
    },
    {
      name: "Holy Moly",
      description: "Prosecco, Hot Ginger Sirup, Maracuja",
      price: "8.50$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/73/1d/c48c05b9962172ae3a751505e6d8.png",
    },
    {
      name: "Plum Wine Spritzer",
      description: "sour",
      price: "8.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/a0/0b/408bd9df0c641a19449c66939848.png",
    },
    {
      name: "Love & Passion",
      description: "Mango pulp with fresh passion fruit, tonic & mint",
      price: "9.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/9b/7c/744da27440fc7814f19e9240975c.png",
    },
    {
      name: "Prosecco",
      description: "NUDO Extra Dry DOC, One Glass",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/86/f8/5ed93b848c3465b4b3ef43947856.png",
    },
    {
      name: "Sake Degu Trio",
      description: "Plum wine, Junmai & Nigori each 4cl, 9.5 - 15 % VOL",
      price: "10.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/b8/e6/e25e577930db5cffb1f2c0ce25f0.png",
    },
    {
      name: "Sake Junmai",
      description: "strong 1dl, 15% VOL.",
      price: "5.00$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/23/2e/4efbf421229b3686325c53be2b18.png",
    },
    {
      name: "Coca Cola Zero",
      description: "Bottle, 1L",
      price: "2.00$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/181122c7326d0a5a5ab8453776b19f4c41640fc4.webp",
    },
    {
      name: "Nycha Kombucha Quitte",
      description:
        "Fermented organic refreshing drink based on green tea and herbs",
      price: "3.50$",
      image:
        "https://familiewiesnergastronomie.rokka.io/shopmanager_product_mood/884c26052843582f09ea801ee76d2f714fa26585.webp",
    },
    {
      name: "Water with CO2",
      description: "1L, with Co2",
      price: "2.50$",
      image:
        "https://shopmanager.fwg-management.ch/media/cache/shopmanager_product/b9/cf/1137b9eb56430b8bb51d325daa3b.png",
    },
  ],
};

export default dummyData;
