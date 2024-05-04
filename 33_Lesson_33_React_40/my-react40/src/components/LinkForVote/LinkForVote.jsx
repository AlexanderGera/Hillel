import './LinkForVote.css';
export function LinkForVote ({children}) {

    let counter = 0;

    function ClickForVote() {
        counter++;
        console.log(counter);
    }

    return <a href="#" className="link_vote" onClick={ClickForVote}>{children}</a>;
}