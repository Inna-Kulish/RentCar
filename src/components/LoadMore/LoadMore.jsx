import { LoadBtn } from "./LoadMore.styled"

export default function LoadMore({ onClick }) {
    return (
        <LoadBtn type="button" onClick={() => onClick()}>Load more</LoadBtn>
    )
}