import styled from 'styled-components'
import Subtitle from '../../components/SubTitle'
import GitLink from '../../components/GitLink'

export const Wrapper = styled.div`
  padding: 30px 10px 10px 10px;
  `

export const StyledSubtitle = styled(Subtitle)`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover{
    transition: none;
  }
`
export const TextBLock = styled.div`
  margin: 30px auto 0px auto;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  text-align: start;
  max-width: ${({ theme }) => theme.sizes.blocks.primary};
  line-height: 20px;
`
export const StyledGitLink = styled(GitLink)`
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
`
