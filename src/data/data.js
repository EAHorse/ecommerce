const products = [
   {
      "id": 1,
      "title": "Motorcycle",
      "price": 109.95,
      "description": "Perfect for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
      "category": "terrestrial",
      "image": "/img/terrestrial/motorcycle.jpg",
      "rating": {
         "rate": 4.5,
         "count": 320
      }
   },
   {
      "id": 2,
      "title": "Car",
      "price": 20500.00,
      "description": "A reliable car for all your travel needs, equipped with modern technology and comfort.",
      "category": "terrestrial",
      "image": "/img/terrestrial/car.jpeg",
      "rating": {
         "rate": 4.7,
         "count": 210
      }
   },
   {
      "id": 3,
      "title": "Truck",
      "price": 35999.99,
      "description": "A heavy-duty truck perfect for transporting goods over long distances.",
      "category": "terrestrial",
      "image": "/img/terrestrial/truck.jpg",
      "rating": {
         "rate": 4.8,
         "count": 150
      }
   },
   {
      "id": 4,
      "title": "Bicycle",
      "price": 499.99,
      "description": "An eco-friendly and healthy way to commute and explore the city.",
      "category": "terrestrial",
      "image": "/img/terrestrial/bicycle.jpg",
      "rating": {
         "rate": 4.2,
         "count": 500
      }
   },
   {
      "id": 5,
      "title": "Airplane",
      "price": 150000000,
      "description": "A state-of-the-art airplane for your long-distance travel needs.",
      "category": "air",
      "image": "/img/air/airplane.jpg",
      "rating": {
         "rate": 4.9,
         "count": 100
      }
   },
   {
      "id": 6,
      "title": "Helicopter",
      "price": 3500000,
      "description": "A versatile helicopter for personal and professional use.",
      "category": "air",
      "image": "/img/air/helicopter.jpg",
      "rating": {
         "rate": 4.6,
         "count": 80
      }
   },
   {
      "id": 7,
      "title": "Drone",
      "price": 1200.00,
      "description": "A high-tech drone for aerial photography and surveillance.",
      "category": "air",
      "image": "/img/air/drone.jpg",
      "rating": {
         "rate": 4.3,
         "count": 300
      }
   },
   {
      "id": 8,
      "title": "Hot Air Balloon",
      "price": 25000.00,
      "description": "Experience the serene beauty of flight with this hot air balloon.",
      "category": "air",
      "image": "/img/air/hot_air_balloon.jpg",
      "rating": {
         "rate": 4.7,
         "count": 60
      }
   },
   {
      "id": 9,
      "title": "Boat",
      "price": 50000.00,
      "description": "A comfortable boat for your aquatic adventures.",
      "category": "aquatic",
      "image": "/img/aquatic/boat.jpg",
      "rating": {
         "rate": 4.5,
         "count": 220
      }
   },
   {
      "id": 10,
      "title": "Submarine",
      "price": 20000000,
      "description": "Explore the depths of the ocean with this private submarine.",
      "category": "aquatic",
      "image": "/img/aquatic/submarine.jpg",
      "rating": {
         "rate": 4.8,
         "count": 30
      }
   },
   {
      "id": 11,
      "title": "Speedboat",
      "price": 75000.00,
      "description": "A fast and sleek speedboat for thrilling water adventures.",
      "category": "aquatic",
      "image": "/img/aquatic/speedboat.jpeg",
      "rating": {
         "rate": 4.6,
         "count": 90
      }
   },
   {
      "id": 12,
      "title": "Jet Ski",
      "price": 12000.00,
      "description": "A fun and exciting jet ski for water sports enthusiasts.",
      "category": "aquatic",
      "image": "/img/aquatic/jet_ski.jpg",
      "rating": {
         "rate": 4.7,
         "count": 150
      }
   },
   {
      "id": 13,
      "title": "Amphibious Vehicle",
      "price": 100000.00,
      "description": "A versatile vehicle capable of traveling on land and water.",
      "category": "amphibious",
      "image": "/img/amphibious/amphibious_vehicle.jpg",
      "rating": {
         "rate": 4.4,
         "count": 45
      }
   },
   {
      "id": 14,
      "title": "Hovercraft",
      "price": 85000.00,
      "description": "A hovercraft that can travel over various terrains, including water.",
      "category": "amphibious",
      "image": "/img/amphibious/hovercraft.jpg",
      "rating": {
         "rate": 4.5,
         "count": 50
      }
   },
   {
      "id": 16,
      "title": "Amphibious Jeep",
      "price": 50000.00,
      "description": "A rugged amphibious jeep suitable for all kinds of adventures.",
      "category": "amphibious",
      "image": "/img/amphibious/amphibious_jeep.png",
      "rating": {
         "rate": 4.3,
         "count": 60
      }
   }
];

const getProducts = () => {
   return new Promise((resolve, reject) =>{
     setTimeout(() => {
       resolve(products);
     }, 2300);
   });
 };

 export default getProducts;
