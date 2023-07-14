import { useTranslation } from 'react-i18next';
import {
    ServicesContainer,
    Title,
    Subtitle,
    Ul,
    Li,
    LiItem,
    Icon
} from './styles';
import { 
    SitesCreating, 
    OutstaffingIT,
    TrainingIT,
    Licenses,
    ServerEquipment
} from './icons/icons'

export const Services = () => {
    const { t } = useTranslation();

    return (
        <ServicesContainer>
            <Title>{t('services')}</Title>
            <Subtitle>{t('offer')}</Subtitle>

            <Ul>
                <Li>
                    <Icon>
                        <SitesCreating />
                    </Icon>
                    <LiItem>
                        {t('sites-creating')}
                    </LiItem>
                </Li>
                <Li>
                    <Icon>
                        <OutstaffingIT />
                    </Icon>
                    <LiItem>
                        {t('outstaffing-IT')}
                    </LiItem>
                </Li>

                <Li>
                    <Icon>
                        <TrainingIT />
                    </Icon>
                    <LiItem>
                        {t('training-IT')}
                    </LiItem>
                </Li>

                <Li>
                    <Icon>
                        <Licenses />
                    </Icon>
                    <LiItem>
                        {t('licenses')}
                    </LiItem>
                </Li>

                <Li>
                    <Icon>
                        <ServerEquipment />
                    </Icon>
                    <LiItem>
                        {t('server-equipment')}
                    </LiItem>
                </Li>

            </Ul>
        </ServicesContainer>
    )
}