import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { ToggleSwitch, Label, Slider, Input } from './styles';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <ToggleSwitch>
            <Label>
                <Input type='checkbox' onChange={toggleTheme} checked={theme === 'light'} />
                <Slider className='slider'></Slider>
            </Label>
        </ToggleSwitch>
    )
}