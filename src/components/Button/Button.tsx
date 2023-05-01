import ButtonProps from './Button.props'
import cn from 'classnames'
import styles from './Button.module.css'

export const Button = ({ appereans, children }: ButtonProps): JSX.Element => {
	return (
		<button
			className={ cn(styles.button, {
				[styles.primary]: appereans == 'primary',
				[styles.ghost]: appereans == 'ghost',
			})}
		>
			{children}
		</button>
		
		)
	}

export default Button
