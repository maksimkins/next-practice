const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const subcategories = [
  {
    name: "Skate Tools",
    href: "/docs/accessories/skate-tools",
    description: "Essential tools for maintaining your skateboard, all rad.",
    categoryId: 4,
  },
  {
    name: "Bushings",
    href: "/docs/accessories/skate-tools",
    description: "Upgrade your ride with our rad selection of bushings.",
    categoryId: 4,
  },
  {
    name: "Shock & Riser Pads",
    href: "/docs/accessories/shock-riser-pads",
    description: "Enhance your skateboard's performance with rad shock and riser pads.",
    categoryId: 4,
  },
  {
    name: "Skate Rails",
    href: "/docs/accessories/skate-rails",
    description: "Add creativity and style to your tricks with our rad skate rails.",
    categoryId: 4,
  },
  {
    name: "Wax",
    href: "/docs/accessories/wax",
    description: "Keep your board gliding smoothly with our rad skate wax.",
    categoryId: 4,
  },
  {
    name: "Socks",
    href: "/docs/accessories/socks",
    description: "Keep your feet comfy and stylish with our rad socks.",
    categoryId: 4,
  },
  {
    name: "Backpacks",
    href: "/docs/accessories/backpacks",
    description: "Carry your gear in style with our rad backpacks.",
    categoryId: 4,
  },
];




const main = async () => {
  try {
    const createdSubcategories = await prisma.subCategory.createMany({
      data: subcategories,
      skipDuplicates: true, 
    });
    //console.log("Subcategories added successfully:", createdSubcategories);
  } catch (error) {
    console.error("Error adding subcategories:", error);
  } finally {
    await prisma.$disconnect();
  }
};

main();
