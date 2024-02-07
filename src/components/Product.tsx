import { Card } from 'react-bootstrap'
import { type ProductType } from "../products"

type ProductProps = {
    product: ProductType
}

export default function Product({product}: ProductProps) {
  return (
    <>
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>
                        ${product.price}
                    </Card.Text>
                </a>
            </Card.Body>
        </Card>
    </>
  )
}