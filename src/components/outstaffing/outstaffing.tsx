import { useTranslation } from 'react-i18next';
import {
    OutstaffingContainer,
    Title,
    Subtitle,
    Img,
    SwitchContainer,
    Ul,
    Li,
} from "./styles"

import { IOSSwitch } from '../switch/switch';

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

    return (
        <OutstaffingContainer>
            <Title>{t('outstaffing')}</Title>
            <Subtitle>{t('provide-employees')}</Subtitle>
            <Img />
            <SwitchContainer>
                <Ul>
                    {outstaffingList.map(item => (
                        <Li>
                        {t(item)}
                        <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </Li>
                    ))}
                    
                </Ul>
            </SwitchContainer>
        </OutstaffingContainer>
    )
}