// Type definitions for pdf-merge

import 'node';

declare namespace pdfMerge{
	interface Options{
		/** Should only be provided if pdftk is not in your PATH Optional! */
		libPath?: string
	}

	interface StreamOptions extends Options{
		/** Defaults to Buffer. Values Buffer, Stream, and path to a new file are accepted. Optional! */
		output: "Stream"
	}

	interface BufferOptions extends Options{
		/** Defaults to Buffer. Values Buffer, Stream, and path to a new file are accepted. Optional! */
		output?: "Buffer"|string
	}

	interface PDFMergeStatic {
		(files: string[], options: StreamOptions): ReadableStream;
		(files: string[], options: BufferOptions): Buffer;
	}
}

declare const pdfMerge: pdfMerge.PDFMergeStatic
export = pdfMerge