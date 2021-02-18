import proposals from '../../data/proposals'


export default function Proposal({ proposal }){
    return (
        <div>
        {proposal.id}
        </div>
    )
}

export async function getStaticPaths() {
    const paths = proposals.map((proposal) => ({ params: { id: proposal.id } }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const proposal = proposals.find(item => item.id == params.id)
    return { props: { proposal } }
}