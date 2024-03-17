import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import ExpandMore from './ExpandMore';

interface ExpandedTextWithButtonProps {
    text: string;
}

const ExpandedTextWithButton: React.FC<ExpandedTextWithButtonProps> = ({
    text,
}) => {
    const [expanded, setExpanded] = useState(false);
    const isTextLongEnough = (): boolean => {
        return text.length > 190;
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Typography
                variant="body2"
                color="text.secondary"
                style={{
                    WebkitLineClamp: expanded ? 'initial' : 5,
                    marginBottom: isTextLongEnough() ? 0 : 15,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box',
                }}
            >
                {text}
            </Typography>
            {isTextLongEnough() ? (
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ pointerEvents: 'auto' }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            ) : (
                ''
            )}
        </>
    );
};

export default ExpandedTextWithButton;
