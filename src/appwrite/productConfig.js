import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65ae5db721b4d9e04d0c"); // Your project ID

const databases = new Databases(client);

const storage = new Storage(client);
export const createProduct = ({
  products_name,
  products_description,
  products_category,
  products_price,
  products_image,
  products_size,
  products_quantity,
  products_id,
}) => {
  const promise = databases.createDocument(
    "65ae5e363fa8b5539c5c",
    "65ae5e4aa137a71a8c70",
    ID.unique(),
    {
      products_name: products_name,
      products_description: products_description,
      products_category: products_category,
      products_price: products_price,
      products_image: products_image,
      products_size: products_size,
      products_quantity: products_quantity,
      products_id: products_id,
    }
  );
  return promise;
};

export const uploadImage = (image) => {
  const promise = storage.createFile(
    "65b0ef13c24a959aa6db",
    ID.unique(),
    image
  );

  return promise;
};

export const getProducts = async () => {
  const promise = await databases.listDocuments(
    "65ae5e363fa8b5539c5c",
    "65ae5e4aa137a71a8c70"
  );
  return promise
};

export const getProduct = (docId) => {
  const promise = databases.getDocument(
    "65ae5e363fa8b5539c5c",
    "65ae5e4aa137a71a8c70",
    docId
  );
  return promise
};


export const getImage = async (imgId) => {
  const promise = await storage.getFile("65b0ef13c24a959aa6db",imgId)
   ;
  return promise
};
