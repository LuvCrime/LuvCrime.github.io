import { useTranslation } from 'react-i18next';
import { 
    CalculatorContainer,
    Title,
    Subtitle 
} from "./styles"

export const Calculator = () => {
    const { t } = useTranslation();

    return (
        <CalculatorContainer>
             <Title>{t('calculator')}</Title>
            <Subtitle>{t('order')}</Subtitle>
        </CalculatorContainer>
    )
}