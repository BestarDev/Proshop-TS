import { Card } from 'react-bootstrap'
import { type ProductType } from "../products"
import { Link } from 'react-router-dom'

type ProductProps = {
    product: ProductType
}

export default function Product({product}: ProductProps) {
  return (
    <>
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>
                        ${product.price}
                    </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    </>
  )
}