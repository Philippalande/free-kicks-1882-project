# Free Kicks: Then & Now
## Using Human-AI Collaboration to Bridge 144 Years of Glasgow Football Culture

**2663879L — AI for the Arts (B), University of Glasgow, 2026**

---

## Project Overview
This project explores the cultural continuity of Glasgow football through a Human-AI collaborative methodology. It pairs original verses and illustrations from the 1882 archive pamphlet *Free Kicks at Football* (Sp Coll Mu2-i.38, University of Glasgow Special Collections) with AI generated 2026 equivalents, curated and directed by a human collaborator at every stage.

---

## Archive Object
**Sp Coll Mu2-i.38 — Free Kicks at Football, Glasgow, 1882**
Held in Special Collections, University of Glasgow Library.
Authors: "Benedict" and Saunders Wylie (pseudonyms)
Illustrations by: "Jingo"

---

## Repository Structure
free-kicks-1882/
├── assets/
│   └── archive/
│       ├── freekicks-illustration.jpg
│       ├── freekicks-hampden.jpg
│       └── freekicks-layontheleather.jpg
├── notebook/
│   └── freekicks-1882.ipynb
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── intro.jsx
│   │   ├── SpreadCard.jsx
│   │   └── SpreadSection.jsx
│   └── styles/
│       ├── global.css
│       ├── SpreadCard.module.css
│       └── SpreadSection.module.css
├── .gitignore
├── index.html
├── package.json
├── requirements.txt
└── README.md

---

## Tools Used
| Tool | Purpose | Where to get it |
|------|---------|-----------------|
| OpenAI GPT (gpt-4o-mini) | AI text generation | platform.openai.com |
| Python 3.11 | Notebook environment | python.org |
| Jupyter Notebook | Primary marked submission | jupyter.org |
| React + Vite | Portfolio presentation in development | vitejs.dev |
| conda | Environment management | anaconda.com |

Note: The React application is in active development as a portfolio piece and is not part of the marked submission. The primary marked submission is the Jupyter Notebook.

---

## Running the Notebook

All notebook outputs are pre-saved and visible without re-running.

To run the notebook yourself:

1. Clone the repository
2. Create and activate the conda environment:
```bash
conda create -n freekicks python=3.11
conda activate freekicks
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Add your OpenAI API key — create a `.env` file in the root directory:
OPENAI_API_KEY=your_key_here
OpenAI credits must be added at platform.openai.com

5. Open the notebook:
```bash
cd notebook
jupyter notebook
```

---

## Attribution and Licensing
- **Archive material:** Sp Coll Mu2-i.38, University of Glasgow Special Collections. Public domain (published 1882)
- **Pamphlet photographs:** taken by the author during a supervised Special Collections visit to the University of Glasgow Library
- **AI generated verses:** produced using OpenAI GPT via the OpenAI API for educational and research purposes
- **Glasgow football vernacular dataset:** sourced from publicly visible Instagram posts, Celtic FC and Rangers FC, May 2026
- **Reference:** Foster, D. (2019) *Generative Deep Learning*. O'Reilly Media. Available at: https://ebookcentral.proquest.com/lib/gla/detail.action?docID=5833992