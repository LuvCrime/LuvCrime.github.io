import { useTranslation } from 'react-i18next';
import {
    OutstaffingContainer,
    Title,
    Subtitle,
    Img,
    SwitchContainer,
    Ul,
    Li,
    NoteContainer,
    Note,
    Textarea,
    ButtonContainer
} from "./styles"

import { useState, ChangeEvent } from 'react'

import { IOSSwitch } from '../switch/switch';

import { Button } from '../button/button';

interface CheckedItems {
    [key: string]: boolean;
}

const outstaffingList = [
    'web',
    'ios',
    'android',
    'back',
    'fullstack',
    "designer",
    'tester',
    'analyst',
    'product',
];

export const Outstaffing = () => {
    const { t } = useTranslation();

    const [checkedItems, setCheckedItems] = useState<CheckedItems>(
        outstaffingList.reduce((acc, item) => {
            acc[item] = false;
            return acc;
        }, {})
    );

    const handleChange = (item: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({
            ...checkedItems,
            [item]: event.target.checked,
        });
    };

    return (
        <OutstaffingContainer>
            <Title>{t('outstaffing')}</Title>
            <Subtitle>{t('provide-employees')}</Subtitle>
            <Img />
            <SwitchContainer>
                <Ul>
                    {outstaffingList.map((item, index) => (
                        <Li key={index}>
                            <div>{t(item)}</div>
                            <div>
                                <IOSSwitch
                                    sx={{ m: 1 }}
                                    checked={checkedItems[item]}
                                    onChange={handleChange(item)}
                                />
                            </div>
                        </Li>
                    ))}
                </Ul>
            </SwitchContainer>
            <NoteContainer>
                <Note>{t('note')}</Note>
                <Textarea />
            </NoteContainer>
            <ButtonContainer>
                <Button>{t('order-button')}</Button>
            </ButtonContainer>
        </OutstaffingContainer>
    )
}