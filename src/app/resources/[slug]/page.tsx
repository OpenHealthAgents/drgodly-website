import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MedicallyReviewedBy } from "@/components/resources/MedicallyReviewedBy";
import { RESOURCE_ARTICLES } from "@/data/resourceArticles";
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = RESOURCE_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  const url = `https://drgodly.com/resources/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      siteName: "DrGodly",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}

import { ArticleTracker } from "@/components/resources/ArticleTracker";

export default function ResourceArticlePage({ params }: ArticlePageProps) {
  const article = RESOURCE_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Schema.org structured data JSON-LD (MedicalWebPage / Article)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": article.title,
    "description": article.metaDescription,
    "url": `https://drgodly.com/resources/${article.slug}`,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role,
    },
    ...(article.medicalReviewer && {
      "reviewedBy": {
        "@type": "Person",
        "name": article.medicalReviewer.name,
        "jobTitle": article.medicalReviewer.credentials,
        "worksFor": {
          "@type": "Organization",
          "name": article.medicalReviewer.affiliation,
        },
      },
    }),
    "publisher": {
      "@type": "Organization",
      "name": "DrGodly Health Technologies",
      "url": "https://drgodly.com",
    },
  };

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Non-sensitive Analytics Tracker */}
      <ArticleTracker slug={article.slug} category={article.category} />

      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-clinical-500 mb-8">
            <Link href="/" className="hover:text-clinical-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-clinical-900">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-clinical-900 font-medium truncate max-w-xs">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6">
            <Badge variant="vital">{article.category}</Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed">
              {article.summary}
            </p>

            {/* Author and Metadata Bar */}
            <div className="pt-4 border-t border-b border-clinical-200 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-clinical-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-clinical-200 flex items-center justify-center font-bold text-clinical-800">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-clinical-950">{article.author.name}</div>
                    <div className="text-clinical-500 text-[11px]">{article.author.role}</div>
                  </div>
                </div>

                <span className="text-clinical-300">•</span>

                <div className="flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-clinical-400" />
                  <span>{article.publishedDate}</span>
                </div>

                <span className="text-clinical-300">•</span>

                <div className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-clinical-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Medically Reviewed Banner */}
            {article.medicalReviewer && (
              <MedicallyReviewedBy reviewer={article.medicalReviewer} />
            )}
          </header>

          {/* Article Body Content */}
          <div className="mt-12 space-y-10 text-clinical-800 font-sans text-base leading-relaxed">
            {article.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-clinical-950 tracking-tight">
                  {sec.sectionHeading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-clinical-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.callout && (
                  <aside className="my-6 p-5 rounded-2xl bg-vital-50/60 border border-vital-200/90 text-sm space-y-1">
                    <div className="font-bold text-vital-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-vital-600" />
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="text-clinical-700 leading-relaxed text-xs sm:text-sm">
                      {sec.callout.text}
                    </p>
                  </aside>
                )}
              </section>
            ))}
          </div>

          {/* Medical Editorial Disclaimer Box */}
          <aside className="mt-16 p-6 rounded-2xl bg-clinical-100 border border-clinical-200 text-xs text-clinical-600 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-clinical-900">
              <AlertCircle className="w-4 h-4 text-vital-600" />
              <span>Medical Content Disclaimer & Editorial Review Policy</span>
            </div>
            <p className="leading-relaxed">
              The clinical educational material on DrGodly is designed to support patient health literacy and clinical workflow comprehension. This content is developed under the guidance of licensed clinicians and does not constitute individual medical diagnosis, prognosis, or treatment recommendations. Always consult a qualified physician or healthcare provider regarding specific medical symptoms or health conditions.
            </p>
          </aside>

          {/* Bottom Back and Next CTA */}
          <div className="mt-12 pt-8 border-t border-clinical-200 flex items-center justify-between">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-bold text-clinical-700 hover:text-clinical-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Resources Hub</span>
            </Link>

            <Link href="/get-started">
              <Button variant="vital" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Experience DrGodly
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
