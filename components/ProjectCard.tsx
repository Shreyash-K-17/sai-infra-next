type Project = {
name: string;
location?: string;
configuration: string;
areaLakhSqft?: number; // lacs sq.ft
};


export default function ProjectCard({ p }: { p: Project }) {
return (
<article className="card p-5">
<h3 className="text-lg font-semibold">{p.name}</h3>
{p.location && <p className="text-sm text-gray-500">{p.location}</p>}
<p className="mt-2 text-sm">{p.configuration}</p>
{p.areaLakhSqft && (
<p className="mt-3 text-sm font-medium">Area: {p.areaLakhSqft} Lacs sq.ft</p>
)}
</article>
);
}