import React from 'react'
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';

const ProductCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Image />
                <Card.Body>
                    <Card.Title><Name /></Card.Title>
                    <Card.Text>
                        <Price />
                        <Description />
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ProductCard