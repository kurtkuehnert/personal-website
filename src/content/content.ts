export type Lang = 'en' | 'de';

export const content = {
  en: {
    hero: {
      name: 'Kurt Kühnert',
      tagline: 'Graphics and geospatial engineer focused on GPU-based large-scale terrain rendering.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
    },
    about: {
      blurb:
        'Software engineer focused on geospatial technology, computer graphics, and GPU-based algorithms. Strong emphasis on precision, large-scale terrain rendering, and converting complex datasets into visual insights.',
      skills: ['Rust', 'WebGPU', 'CUDA', 'GDAL', 'Geospatial pipelines', 'Real-time rendering', 'GPU algorithms', 'UDLOD', 'Clipmaps'],
      education: [
        'M.Sc. Computer Science — TU Chemnitz (2023–2025), Grade: 1.2',
        'B.Sc. Computer Science — TU Chemnitz (2019–2023), Grade: 1.1',
      ],
      tech: ['Rust', 'WebGPU', 'CUDA', 'Bevy', 'WGSL/GLSL', 'WASM', 'GDAL', 'LOD/Clipmaps', 'Geospatial Pipelines'],
    },
    publications: {
      title: 'Publications',
      items: [
        {
          title:
            'A Novel Approach to Real-Time Rendering of Large-Scale Terrains Employing Uniform Distance-Dependent Level of Detail and Chunked Clipmaps',
          venue: 'VR/AR Workshop 2023',
          year: '2023',
          doi: '10.18420/vrar2023_3387',
          url: 'https://doi.org/10.18420/vrar2023_3387',
          authors: 'Kurt Kühnert; Tom Uhlmann; Guido Brunnett',
          summary:
            'Introduces UDLOD triangulation and chunked clipmaps for real‑time rendering of massive terrains (e.g., Free State of Saxony at 1m). Emphasizes GPU parallelism, seamless LOD transitions, and fault‑tolerant streaming.'
        },
      ],
    },
  },
  de: {
    hero: {
      name: 'Kurt Kühnert',
      tagline: 'Ingenieur für Geodaten und Computergrafik mit Fokus auf GPU‑basiertes großskaliges Terrain‑Rendering.',
      ctaProjects: 'Projekte ansehen',
      ctaContact: 'Kontakt',
    },
    about: {
      blurb:
        'Softwareentwickler mit Schwerpunkt Geodaten, Computergrafik und GPU‑Algorithmen. Hoher Anspruch an Präzision, großskaliges Terrain‑Rendering und die Übersetzung komplexer Daten in klare Visualisierungen.',
      skills: ['Rust', 'WebGPU', 'CUDA', 'GDAL', 'Geodaten‑Pipelines', 'Echtzeit‑Rendering', 'GPU‑Algorithmen', 'UDLOD', 'Clipmaps'],
      education: [
        'M.Sc. Informatik — TU Chemnitz (2023–2025), Note: 1,2',
        'B.Sc. Informatik — TU Chemnitz (2019–2023), Note: 1,1',
      ],
      tech: ['Rust', 'WebGPU', 'CUDA', 'Bevy', 'WGSL/GLSL', 'WASM', 'GDAL', 'LOD/Clipmaps', 'Geodaten‑Pipelines'],
    },
    publications: {
      title: 'Publikationen',
      items: [
        {
          title:
            'A Novel Approach to Real-Time Rendering of Large-Scale Terrains Employing Uniform Distance-Dependent Level of Detail and Chunked Clipmaps',
          venue: 'VR/AR Workshop 2023',
          year: '2023',
          doi: '10.18420/vrar2023_3387',
          url: 'https://doi.org/10.18420/vrar2023_3387',
          authors: 'Kurt Kühnert; Tom Uhlmann; Guido Brunnett',
          summary:
            'Stellt UDLOD‑Triangulation und Chunked Clipmaps für das Echtzeit‑Rendering großer Terrains vor (z. B. Sachsen mit 1 m Auflösung). Fokus auf GPU‑Parallelität, nahtlose LOD‑Übergänge und robustes Streaming.'
        },
      ],
    },
  },
} as const;
