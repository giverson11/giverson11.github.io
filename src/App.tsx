import React, { useState } from 'react';
import PortfolioItem from './components/PortfolioItem';
import { Container, Typography, Card } from '@mui/material';

const App: React.FC = () => {
    const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
    const portfolioItems = [
        {
            id: 1,
            title: 'Game 1: Adventure Quest',
            description: 'A 2D platformer game built with Unity. Features include dynamic level design, enemy AI, and a captivating storyline.',
            imageUrl: 'images/game1-screenshot.png',
            itemProps: [{
              title: 'Cool Mechanic 1',
              description: 'A 2D platformer game built with Unity. Features include dynamic level design, enemy AI, and a captivating storyline.',
              imageUrl: 'https://pbs.twimg.com/profile_images/1363893159491682305/zrTP7M79_400x400.png',
            },
            {
              title: 'Cool Mechanic 2',
              description: 'A 2D platformer game built with Unity. Features include dynamic level design, enemy AI, and a captivating storyline.',
              imageUrl: 'https://pbs.twimg.com/profile_images/1363893159491682305/zrTP7M79_400x400.png',
            }]
        },
        {
            id: 2,
            title: 'Game 2: Space Shooter',
            description: 'A top-down space shooter game developed using Unreal Engine. Includes multiplayer functionality and custom particle effects.',
            imageUrl: 'https://pbs.twimg.com/profile_images/1363893159491682305/zrTP7M79_400x400.png',
            itemProps: [{
              title: 'Cool Mechanic 1',
              description: 'A 2D platformer game built with Unity. Features include dynamic level design, enemy AI, and a captivating storyline.',
              imageUrl: 'https://pbs.twimg.com/profile_images/1363893159491682305/zrTP7M79_400x400.png',
            },
            {
              title: 'Cool Mechanic 2',
              description: 'A 2D platformer game built with Unity. Features include dynamic level design, enemy AI, and a captivating storyline.',
              imageUrl: 'https://pbs.twimg.com/profile_images/1363893159491682305/zrTP7M79_400x400.png',
            }]
        },
        // Add more items as needed
    ];
    const handleItemClick = (itemId: number) => {
      setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
    };

    return (
        <Container>
          
            <Typography variant="h2" align="center" gutterBottom>
                Game Development Portfolio
            </Typography>
            {portfolioItems.map((item, index) => (
                <PortfolioItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    isExpanded={expandedItemId === item.id}
                    onClick={() => handleItemClick(item.id)}
                    itemProps={item.itemProps}
                />
            ))}
          
        </Container>
    );
};

export default App;