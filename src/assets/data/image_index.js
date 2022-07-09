const image_urls = [
  {
    id: "3e2ff537-ac5e-499c-b5d3-85e1dd57baf8",
    images: [require("../images/amish_tripathi_1.png")],
  },
  {
    id: "46796a8a-be77-4102-b234-c27ec2f6924a",
    images: [require("../images/amish_tripathi_2.png")],
  },
  {
    id: "6b8165e4-0e9e-4dc5-b66f-f96d83c4face",
    images: [require("../images/amish_tripathi_3.png")],
  },
  {
    id: "72bce126-ce3f-41ca-8aa1-46f62b830397",
    images: [require("../images/amish_tripathi_4.png")],
  },
  {
    id: "693b29e3-f572-4999-8a7e-1ef1f9255a1d",
    images: [require("../images/amish_tripathi_5.png")],
  },
  {
    id: "5d776709-baaa-46e5-8447-732d020c8c37",
    images: [require("../images/amish_tripathi_6.png")],
  },
  {
    id: "d6871fa3-9097-4912-845e-4290fa930255",
    images: [require("../images/amish_tripathi_7.png")],
  },
  {
    id: "2663dc17-55da-47ab-bcc9-bef7901feb8e",
    images: [require("../images/amish_tripathi_8.png")],
  },
  {
    id: "0c0dc056-91c4-4b6e-ba10-741b44486f9b",
    images: [require("../images/james_clear_1.png")],
  },
  {
    id: "d03e87e4-cb8f-44eb-bd25-1a9c702b6bcb",
    images: [require("../images/morgan_housel_1.png")],
  },
  {
    id: "669ec0fc-426e-4061-a146-004c1333afb4",
    images: [require("../images/robin_sharma_1.png")],
  },
  {
    id: "62f86f2e-1dca-4f25-b7a8-ae25dd2595b9",
    images: [require("../images/robin_sharma_2.png")],
  },
  {
    id: "26a47624-cfcd-49db-aba6-c67ff12aba67",
    images: [require("../images/robin_sharma_3.png")],
  },
  {
    id: "b50e2a99-afd2-4071-b17c-1268c0a74c05",
    images: [require("../images/robin_sharma_4.png")],
  },
  {
    id: "10836968-a38d-48ac-933e-3ef25e62b4f1",
    images: [require("../images/robin_sharma_5.png")],
  },
  {
    id: "437f3f45-e7ea-46e2-b70d-3d08589fe64c",
    images: [require("../images/robin_sharma_6.png")],
  },
  {
    id: "f52afad7-b4ec-455a-a04f-162c24b284d0",
    images: [require("../images/robin_sharma_7.png")],
  },
  {
    id: "c8ac9af9-df79-4720-a6cf-1f88df3e4ab4",
    images: [require("../images/robin_sharma_8.png")],
  },
  {
    id: "0791d338-ec22-4ff2-ab8b-1899fb6b99f8",
    images: [require("../images/robin_sharma_9.png")],
  },
  {
    id: "aaa2a906-c0b5-460d-ab95-77ade5d5a8af",
    images: [require("../images/robin_sharma_10.png")],
  },
  {
    id: "3fbbb7db-ace1-44cb-bd5f-6417ac4af223",
    images: [require("../images/robin_sharma_11.png")],
  },
  {
    id: "7a4c2bfa-3e04-4385-9350-855805d2f1cc",
    images: [require("../images/robin_sharma_12.png")],
  },
  {
    id: "248d1157-90f8-4f23-a224-94c476d354b1",
    images: [require("../images/backpack (1).jpg")],
  },
  {
    id: "fad59de7-812f-4232-902c-325f7bb92754",
    images: [require("../images/backpack (2).jpg")],
  },
  {
    id: "59544db5-b8e0-4390-8025-3edf0151a7aa",
    images: [require("../images/bevrages (1).jpg")],
  },
  {
    id: "92594c29-36f1-497a-8a56-7334fe6b5b21",
    images: [require("../images/bevrages (2).jpg")],
  },
  {
    id: "b307cd02-654a-462f-b697-65dab8a0e434",
    images: [require("../images/bevrages (3).jpg")],
  },
  {
    id: "f7da01c1-556d-4203-a501-f02050890edc",
    images: [require("../images/bevrages (4).jpg")],
  },
  {
    id: "6e57769e-e790-4a0b-8369-749f47f68e61",
    images: [require("../images/bevrages (5).jpg")],
  },
  {
    id: "b3aded3c-ea91-49da-9427-6d2d860df20c",
    images: [require("../images/bike.jpg")],
  },
  {
    id: "f9a6721e-b72f-4893-9eb0-abd7eb201a6d",
    images: [require("../images/bottled_water.jpg")],
  },
  {
    id: "bcfb8847-9cdc-43dc-b393-659ab8befc41",
    images: [require("../images/camera(1).jpg")],
  },
  {
    id: "a6eac0b6-e649-4c27-863d-a05173c292ff",
    images: [require("../images/camera(2).jpg")],
  },
  {
    id: "ad717995-dcc6-4d74-8ea2-d599aa963049",
    images: [require("../images/camera(3).jpg")],
  },
  {
    id: "87ba055d-fc56-4227-9fd8-d90257bd1a0d",
    images: [require("../images/camera(4).jpg")],
  },
  {
    id: "bbc6563c-4c9a-4944-a292-b5e22e07b740",
    images: [require("../images/chair (1).jpg")],
  },
  {
    id: "a24c9dae-54bc-4914-994a-04d96a4910de",
    images: [require("../images/chair (2).jpg")],
  },
  {
    id: "81d5c38c-17a0-4833-8acf-a2bfe3d8f67a",
    images: [require("../images/cosmetics (1).jpg")],
  },
  {
    id: "6bb59b35-a69e-4ccd-9fe4-b67018e621c1",
    images: [require("../images/cosmetics (2).jpg")],
  },
  {
    id: "aaabb782-aa62-44e1-b776-edfffa7d4cd2",
    images: [
      require("../images/cosmetics (3).jpg"),
      require("../images/cosmetics (11).jpg"),
    ],
  },
  {
    id: "25f9ae66-25b1-42a4-909b-66d4037a25b1",
    images: [require("../images/cosmetics (10).jpg")],
  },
  {
    id: "3b39592b-0cce-41dd-a0ee-ee11c6d38320",
    images: [require("../images/cosmetics (4).jpg")],
  },
  {
    id: "32465546-9fa2-45fc-a798-740952878929",
    images: [require("../images/cosmetics (5).jpg")],
  },
  {
    id: "a18c2ff7-f7f3-42ad-b0a7-9f491a9fe47f",
    images: [require("../images/cosmetics (6).jpg")],
  },
  {
    id: "483038c5-7692-4ce5-882d-295e3c318e4b",
    images: [require("../images/cosmetics (7).jpg")],
  },
  {
    id: "30a217dd-580e-4d12-abbd-757b0c6a1a5c",
    images: [require("../images/cosmetics (8).jpg")],
  },
  {
    id: "6125b8cd-c830-4ff0-90a2-99951c26aee3",
    images: [require("../images/drone.jpg")],
  },
  {
    id: "102d9455-a648-49b3-92f7-31d54028bbe4",
    images: [require("../images/electric_shaver.jpg")],
  },
  {
    id: "992b9c6d-9039-426f-bad1-ec92e5583d0c",
    images: [require("../images/eyewear (1).jpg")],
  },
  {
    id: "46e8cb7f-98a4-4a41-8105-5792e7a42560",
    images: [require("../images/eyewear (2).jpg")],
  },
  {
    id: "3c0cdc94-bffd-4a33-bf8b-6b0247ae0d75",
    images: [require("../images/footwear (1).jpg")],
  },
  {
    id: "c74231fb-6d95-4d00-a4f1-ec6a982aa8bc",
    images: [require("../images/footwear (2).jpg")],
  },
  {
    id: "5899ddfa-5c41-470d-addf-efd867ddddfd",
    images: [require("../images/footwear (3).jpg")],
  },
  {
    id: "b9eeaef6-82ea-458d-9829-9f4c7bc20944",
    images: [require("../images/footwear (4).jpg")],
  },
  {
    id: "9fd39a3c-2b56-4679-848f-4dc98dcf6d7d",
    images: [require("../images/footwear (5).jpg")],
  },
  {
    id: "d2f977be-0aae-4244-b35d-01db4f379346",
    images: [require("../images/footwear (6).jpg")],
  },
  {
    id: "3272c03e-d480-4a99-8f4f-cfd8c4d4e877",
    images: [require("../images/footwear (7).jpg")],
  },
  {
    id: "153f824b-df56-4f7c-8e5b-65ac9e685c2c",
    images: [require("../images/footwear (8).jpg")],
  },
  {
    id: "393f8cbe-c653-49d2-985e-10f6156be1ee",
    images: [require("../images/footwear (9).jpg")],
  },
  {
    id: "b43e6da3-61c2-4d2c-9c7e-5a84c9820112",
    images: [require("../images/gulper (1).jpg")],
  },
  {
    id: "430de1d9-e40f-4a5d-9ee3-cedd42b7258b",
    images: [require("../images/gulper (2).jpg")],
  },
  {
    id: "d9a86961-a5a2-4035-ac38-1c0b745159ee",
    images: [require("../images/gulper (3).jpg")],
  },
  {
    id: "e8feb649-a2b0-4e88-9119-fcac46ea794f",
    images: [require("../images/headphones (1).jpg")],
  },
  {
    id: "6dd8deb6-e476-42f6-960a-1fa8943a7954",
    images: [require("../images/headphones (2).jpg")],
  },
  {
    id: "2d0fc79f-6232-4281-ba9d-35ad2b3815f6",
    images: [
      require("../images/headphones (3).jpg"),
      require("../images/headphones (4).jpg"),
    ],
  },
  {
    id: "689fab95-8696-4c95-ad0b-04d085356382",
    images: [require("../images/headphones (5).jpg")],
  },
  {
    id: "f1eeb551-c371-499b-839b-3833ea0cd5f6",
    images: [require("../images/headphones (6).jpg")],
  },
  {
    id: "0cb1a1c0-4ba9-4464-91d6-112c2dcfecc9",
    images: [require("../images/headphones (7).jpg")],
  },
  {
    id: "f7d224e4-0ecb-4b24-95a9-e171241b5eb4",
    images: [
      require("../images/jeans (1).jpg"),
      require("../images/jeans (2).jpg"),
      require("../images/jeans (3).jpg"),
    ],
  },
  {
    id: "c05ea5a4-1697-4eeb-94a7-32787d499c25",
    images: [require("../images/mechanical_keyboard.jpg")],
  },
  {
    id: "5db77c1a-00f6-44b2-b1dc-7e02e3144c10",
    images: [require("../images/mouse.jpg")],
  },
  {
    id: "f86ffeb0-229e-4469-b230-199fbdc7b51b",
    images: [require("../images/pencil (1).jpg")],
  },
  {
    id: "60322540-f011-4870-bc00-37522df564bd",
    images: [require("../images/pencil (2).jpg")],
  },
  {
    id: "e14406f8-d6b9-4e96-a429-0bbb304cbe30",
    images: [
      require("../images/shirt (1).jpg"),
      require("../images/shirt (2).jpg"),
      require("../images/shirt (3).jpg"),
    ],
  },
  {
    id: "0a876dae-b74c-453f-8ded-594290f72c8d",
    images: [require("../images/smart_watch (1).jpg")],
  },
  {
    id: "b1c6d810-2d28-4c69-9559-5ca9892beecf",
    images: [require("../images/smart_watch (2).jpg")],
  },
  {
    id: "eb368aaa-89f2-4d87-9f64-587230557414",
    images: [require("../images/watch (1).jpg")],
  },
  {
    id: "86be83c4-c030-4838-9967-794b8b8cbbc8",
    images: [require("../images/watch (3).jpg")],
  },
  {
    id: "ed5ca1ce-7df5-4579-9911-60a9c89889d2",
    images: [require("../images/watch (4).jpg")],
  },
];

export default image_urls;
