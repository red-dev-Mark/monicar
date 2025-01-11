import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const resetInput = style({
    height: '56px',
    color: styles.colors.black,
    backgroundColor: styles.colors.shadow[400],
    border: 0,
    boxShadow: 'none',
    paddingLeft: '72px',
    paddingRight: '28px',
})

export const signInInput = style({
    width: '342px',
    height: '60px',
    display: 'flex',
    position: 'relative',
    border: `2px solid ${styles.colors.gray[200]}`,
    borderRadius: '30px',
    boxShadow: `0px 4px 4px 0px  ${styles.colors.shadow[400]}`,
})

export const iconWrapper = style({
    width: '56px',
    height: '56px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: styles.colors.white,
    boxShadow: `0px 2px 2px 2px ${styles.colors.shadow[500]}`,
    borderRadius: '50%',
})
