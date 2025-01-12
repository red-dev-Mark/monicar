import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '342px',
    padding: '30px',
    height: '486px',
    borderRadius: '12px',
    backgroundColor: styles.colors.white,
    color: styles.colors.black,
    textAlign: 'center',
})

export const textWrapper = style({
    fontWeight: styles.fontWeights.extraBold,
    fontSize: styles.fontSizes.large,
})

export const dateWrapper = style({
    color: styles.colors.gray[500],
    fontSize: styles.fontSizes.small,
})

export const header = style({
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
})

export const weekDays = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '12px',
    marginBottom: '8px',
    fontWeight: styles.fontWeights.extraBold,
    textAlign: 'center',
})

export const days = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '12px',
    fontWeight: styles.fontWeights.extraBold,
    textAlign: 'center',
})

export const today = style({
    width: '30px',
    height: '30px',
    backgroundColor: styles.colors.primary,
    borderRadius: '50%',
    color: styles.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
})

export const weekendDay = style({
    color: styles.colors.gray[500],
})

export const weekendDate = style({
    color: styles.colors.gray[500],
})

export const divider = style({
    width: '100%',
    height: '1px',
    backgroundColor: styles.colors.gray[300],
    margin: '20px 0',
})

export const messageContainer = style({
    display: 'flex',
    gap: '12px',
    position: 'relative',
})

export const verticalLine = style({
    position: 'absolute',
    left: '6px',
    width: '2px',
    height: '100%',
    backgroundColor: styles.colors.gray[300],
})

export const messageList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    paddingLeft: '24px',
})

export const messageWrapper = style({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontWeight: styles.fontWeights.extraBold,
    color: styles.colors.gray[500],
})

export const dot = style({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: styles.colors.gray[300],
    position: 'absolute',
    left: '-24px',
    zIndex: styles.zIndex.default,
})

export const activeMessageWrapper = style({
    color: styles.colors.primary,
})

export const activeDot = style({
    backgroundColor: styles.colors.primary,
})
