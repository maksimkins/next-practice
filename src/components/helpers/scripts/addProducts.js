// Import Prisma Client
const { PrismaClient } = require('@prisma/client');
const { products } = require('../../../data/products'); // Import the array from products.js

const prisma = new PrismaClient();

// Define the necessary fields for each product
const requiredFields = ['categoryId', 'subCategoryId', 'name', 'price', 'description', 'image'];

function cleanProduct(product) {
  // Only return properties that are needed for the product table
  return requiredFields.reduce((cleanedProduct, field) => {
    if (product[field] !== undefined) {
      cleanedProduct[field] = product[field];
    }
    return cleanedProduct;
  }, {});
}

async function addProductsToDatabase() {
  try {
    // Clean each product to ensure only relevant fields are inserted
    const cleanedProducts = products.map(cleanProduct);

    // Insert the cleaned products into the database
    await prisma.product.createMany({
      data: cleanedProducts,
    });

    //console.log('Products successfully added to the database.');
  } catch (error) {
    console.error('Error adding products to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the function to add cleaned products
addProductsToDatabase();
