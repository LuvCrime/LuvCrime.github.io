import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    CalculatorContainer,
    Title,
    Subtitle,
    StyledCalculator,
    DescriptionContainer,
    Span,
    Ul,
    Li,
    LiTitle,
    MonthCount,
    ToggleContainer
} from "./styles"

import { IOSSwitch } from '../switch/switch';

import { useState } from 'react';
import { BreadcrumbsCalc } from './breadcrumbs'
import { ChangeEvent } from 'react';

import { IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface PriceItem {
    id: number;
    blockId: string;
    name: string;
    price: string;
    include?: boolean;
    monthCount?: number;
}


const breadcrumbs = [
    "business-card-site",
    "corporate-website",
    "online-store",
    "service-portal",
    "application"
];

export const Calculator = () => {
    const { t } = useTranslation();

    const [activeLink, setActiveLink] = useState<string>('business-card-site');

    const [prices, setPrices] = useState<PriceItem[]>([{
        id: 1,
        blockId: "business-card-site",
        name: "domen",
        price: "200",
        include: false
    },
    {
        id: 2,
        blockId: "business-card-site",
        name: "word-press",
        price: "300",
        include: false
    },
    {
        id: 3,
        blockId: "business-card-site",
        name: "google",
        price: "100",
        include: false
    },

    {
        id: 4,
        blockId: "business-card-site",
        name: "support",
        price: "100",
        monthCount: 3,
    }
    ]);
    console.log('prices', prices)

    const handleClick = (event: React.MouseEvent, item: string) => {
        event.preventDefault();
        setActiveLink(item);
        console.info('You clicked a breadcrumb.', item);
    }

    const handleSwitchChange = (id: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const updatedPrices = prices.map(item => {
            if (item.id === id) {
                return { ...item, include: event.target.checked };
            }
            return item;
        });
        setPrices(updatedPrices);
    };


    return (
        <CalculatorContainer>
            <Title>{t('calculator')}</Title>
            <Subtitle>{t('order')}</Subtitle>
            <StyledCalculator>
                <BreadcrumbsCalc handleClick={handleClick} activeLink={activeLink} breadcrumbs={breadcrumbs} />
            </StyledCalculator>
            <DescriptionContainer>
                {breadcrumbs.map((item, id) => {
                    if (item === activeLink) {
                        return (
                            <div key={id}>
                                <Span>{t(`${activeLink}-description-1`)}</Span>
                                <Span>{t(`${activeLink}-description-2`)}</Span>
                                <ul>
                                    <Span><li>{t(`${activeLink}-description-3`)}</li></Span>
                                    <Span><li>{t(`${activeLink}-description-4`)}</li></Span>
                                    <Span><li>{t(`${activeLink}-description-5`)}</li></Span>
                                </ul>


                                <Ul>
                                    {prices.map((item) => {
                                        if (activeLink === item.blockId) {
                                            if(item.monthCount) {
                                                return (
                                                    <Li key={item.name}>
                                                        <LiTitle>{t(item.name)}</LiTitle>
                                                        <div>{item.price} €</div>
                                                        <ToggleContainer>
                                                            <IconButton aria-label="delete">
                                                                <AddIcon />
                                                            </IconButton>
                                                            <MonthCount>
                                                                {item.monthCount}&nbsp;{t("month")}
                                                            </MonthCount>
                                                            <IconButton aria-label="delete">
                                                                <RemoveIcon />
                                                            </IconButton>
                                                        </ToggleContainer>
                                                    </Li>
                                                )
                                            }
                                            return (
                                                <Li key={item.name}>
                                                    <LiTitle>{t(item.name)}</LiTitle>
                                                    <div>{item.price} €</div>
                                                    <ToggleContainer>
                                                        <IOSSwitch
                                                            sx={{ m: 1 }}
                                                            checked={item.include}
                                                            onChange={handleSwitchChange(item.id)}
                                                        />
                                                    </ToggleContainer>
                                                </Li>
                                            )
                                        } 
                                    })}

                                </Ul>
                            </div>
                        )
                    }
                    return null
                })
                }
            </DescriptionContainer>
        </CalculatorContainer>
    )
}