import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Collapse} from '@mui/material';

export interface ExpandedItemProps{
    title: string;
    description: string;
    imageUrl: string;
}

interface PortfolioItemProps {
    title: string;
    description: string;
    imageUrl: string;
    isExpanded: boolean;
    onClick: () => void;
    itemProps: ExpandedItemProps[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl, isExpanded, onClick, itemProps}) => {
    return (
        <Card sx={{ maxWidth: '800', margin: '20px auto' }}>
            <CardActionArea  onClick={onClick}>
                <Collapse in={!isExpanded}>
                <CardMedia
                    component="img"
                    height="300"
                    image={imageUrl}
                    alt={title}
                    sx={{ objectFit: 'cover' }} 
                />
                </Collapse>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                <Collapse in={isExpanded}>
                <Grid container   
                    sx={{
                        justifyContent: "space-evenly",
                        alignItems: "baseline",
                    }}
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {itemProps.map((item, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Card>
                    <CardMedia
                    component="img"
                    height="300"
                    image={item.imageUrl}
                    alt={title}
                    sx={{ objectFit: 'cover' }} 
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
                    </Collapse>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioItem;